const shell = require('shelljs');
const path = require('path');

updatePackageJson({
  PACKAGE_NAME: 'wxdt', // package名字
  NW_VERSION: '0.24.4-sdk', // 使用nwjs版本
  PACKAGE_NW_PATH: path.resolve(__dirname, '..', 'package.nw'),
});

function updatePackageJson({
  PACKAGE_NAME,
  NW_VERSION,
  PACKAGE_NW_PATH,
}) {
    const nwPackageJson = require(path.resolv(PACKAGE_NW_PATH, 'package.json'));
    nwPackageJson.name = PACKAGE_NAME;
    writePackageJson(PACKAGE_NW_PATH, nwPackageJson);
    nwPackageJson.scripts = nwPackageJson.scripts || {};
    nwPackageJson.scripts.start = 'nw .';
    nwPackageJson.dependencies = parseDependencies(getDependencies(PACKAGE_NW_PATH), PACKAGE_NW_PATH);
    nwPackageJson.dependencies.nw = NW_VERSION;
    delete nwPackageJson.dependencies['node-windows'];
    writePackageJson(PACKAGE_NW_PATH, nwPackageJson);
}

function getDependencies(p) {
    shell.pushd(p);
    const newPackageJson = JSON.parse(shell.exec('npm list --depth=0 --json').stdout);
    shell.popd();
    return newPackageJson.dependencies;
}

function writePackageJson(packageJson, packagePath) {
    shell
        .echo(JSON.stringify(packageJson, null, 2))
        .to(path.resolve(packagePath, 'package.json'));
}

function parseDependencies (list, packagePath, packagesName = 'packages') {
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
    for (const name in list) {
        const { from } = list[name];
        if (from.indexOf('@') !== -1) {
            shell.echo(name);
            dependencies[name] = from.split('@')[1];
            continue;
        }

        shell.echo('self package:', name, from);

        dependencies[name] = `file:./${packagesName}/${name}`;
        shell.cp('-R',
            path.resolve(PACKAGE_NW_PATH, 'node_modules', name),
            PACKAGE_NW_PACKAGES_PATH
        );
    }
    return dependencies;
}
