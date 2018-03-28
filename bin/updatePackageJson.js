const shell = require('shelljs');
const path = require('path');
const fs = require('fs');

function getDependencies() {
  const newPackageJson = JSON.parse(shell.exec('npm list --depth=0 --json').stdout);
  return newPackageJson.dependencies;
}

function readPackageJson() {
  return JSON.parse(fs.readFileSync(
    'package.json',
    'utf8',
  ));
}
function writePackageJson(packageJson) {
  shell
    .echo(JSON.stringify(packageJson, null, 2))
    .to('package.json');
}

function parseDependencies(list, packagesDir = 'packages') {
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
  const dependencies = {};
  Object.keys(list).forEach((name) => {
    const { from } = list[name];
    if (from.indexOf('@') !== -1) {
      const version = from.split('@')[1];
      shell.echo(name, version);
      dependencies[name] = version;
      return;
    }

    shell.echo('self package:', name, from);

    dependencies[name] = `file:./${packagesDir}/${name}`;
    shell.cp(
      '-R',
      path.resolve('node_modules', name),
      packagesDir,
    );
  });
  return dependencies;
}

module.exports = function updatePackageJson({
  PACKAGE_NAME,
  NW_VERSION,
  PACKAGE_NW_PATH,
  PACKAGE_EXTENDS = {},
}) {
  shell.pushd(PACKAGE_NW_PATH);
  const nwPackageJson = {
    ...readPackageJson(),
    name: PACKAGE_NAME,
    ...PACKAGE_EXTENDS,
  };

  writePackageJson(nwPackageJson);
  nwPackageJson.dependencies = parseDependencies(getDependencies());
  nwPackageJson.dependencies.nw = NW_VERSION;
  delete nwPackageJson.dependencies['node-windows'];
  writePackageJson(nwPackageJson);
  shell.popd(PACKAGE_NW_PATH);
};
