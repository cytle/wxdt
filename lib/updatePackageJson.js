const shell = require('shelljs');
const path = require('path');
const fs = require('fs');
const _ = require('lodash');

/**
 * 获取当前npm工程dependencies
 * @return {Object}
 */
function getDependencies() {
  const { dependencies } = JSON.parse(shell.exec('npm list --depth=0 --json').stdout);
  return dependencies;
}

/**
 * 读取当前npm工程package.json
 * @return {Object}
 */
function readPackageJson() {
  return JSON.parse(fs.readFileSync(
    'package.json',
    'utf8',
  ));
}

/**
 * 写入当前npm工程package.json
 * @param {Object} packageJson
 */
function writePackageJson(packageJson) {
  return fs.writeFileSync(
    'package.json',
    JSON.stringify(packageJson, null, 2),
    'utf8',
  );
}

/**
 * 解析依赖，如果包是私库时，会将其移动到packages目录下
 * @param {Object} dependencies
 * @param {String} packagesDir
 */
function parseDependencies(dependencies, packagesDir = 'packages') {
  shell.mkdir('-p', packagesDir);
  /**
   * 所有依赖，格式为
   * {
   *   name: version/file
   * }
   *
   * 但包是私库时，会将其移动到packages下，
   * 如："node-sync-ipc": "file:./packages/node-sync-ipc"
   */
  const newDependencies = _.mapValues(dependencies, (from, name) => {
    // 如果有@符号表明不是私库依赖
    if (from.indexOf('@') !== -1) {
      const version = from.split('@')[1];
      shell.echo(name, version);
      return version;
    }

    shell.echo('self package:', name, from);

    // 私库依赖转换为 `file:./${packagesDir}/${name}`
    shell.cp(
      '-R',
      path.resolve('node_modules', name),
      packagesDir,
    );
    return `file:./${packagesDir}/${name}`;
  });

  return newDependencies;
}

/**
 * 更新package.json, 并且处理私库依赖情况
 * @param {String} projectDir 项目目录
 * @param {Object} param0
 */
module.exports = function updatePackageJson(projectDir, {
  nwVersion,
  // 自定义扩展, 必须含有name字段, 且其值必须符合packge.json规定
  packageExtends = {},
}) {
  shell.pushd(projectDir);

  /**
   * 微信开发者工具的package.json
   */
  const oldPackageJson = readPackageJson();

  /**
   * wxdt的package.json
   */
  const nwPackageJson = {
    ...oldPackageJson,
    ...packageExtends,
  };

  // 执行getDependencies需要在package
  writePackageJson(nwPackageJson);
  nwPackageJson.dependencies = parseDependencies(getDependencies());
  nwPackageJson.dependencies.nw = nwVersion;
  /**
   * node-windows 是让Windows支持Node.JS脚本，这里不需要
   */
  delete nwPackageJson.dependencies['node-windows'];
  writePackageJson(nwPackageJson);
  shell.popd();
};
