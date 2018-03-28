const shell = require('shelljs');
const path = require('path');
const fs = require('fs');

function getDependencies(p) {
  shell.pushd(p);
  const newPackageJson = JSON.parse(shell.exec('npm list --depth=0 --json').stdout);
  shell.popd();
  return newPackageJson.dependencies;
}

function readPackageJson(packagePath) {
  return JSON.parse(fs.readFileSync(
    path.resolv(packagePath, 'package.json'),
    'utf8',
  ));
}
function writePackageJson(packageJson, packagePath) {
  shell
    .echo(JSON.stringify(packageJson, null, 2))
    .to(path.resolve(packagePath, 'package.json'));
}

function parseDependencies(list, packagePath, packagesName = 'packages') {
  const PACKAGE_NW_PACKAGES_PATH = path.resolve(packagePath, packagesName);
  shell.mkdir('-p', PACKAGE_NW_PACKAGES_PATH);
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

    dependencies[name] = `file:./${packagesName}/${name}`;
    shell.cp(
      '-R',
      path.resolve(packagePath, 'node_modules', name),
      PACKAGE_NW_PACKAGES_PATH,
    );
  });
  return dependencies;
}

module.exports.default = function updatePackageJson({
  PACKAGE_NAME,
  NW_VERSION,
  PACKAGE_NW_PATH,
  PACKAGE_EXTENDS = {},
}) {
  const nwPackageJson = {
    ...readPackageJson(PACKAGE_NW_PATH),
    name: PACKAGE_NAME,
    ...PACKAGE_EXTENDS,
  };

  writePackageJson(PACKAGE_NW_PATH, nwPackageJson);
  nwPackageJson.dependencies = parseDependencies(getDependencies(PACKAGE_NW_PATH), PACKAGE_NW_PATH);
  nwPackageJson.dependencies.nw = NW_VERSION;
  delete nwPackageJson.dependencies['node-windows'];
  writePackageJson(PACKAGE_NW_PATH, nwPackageJson);
};
