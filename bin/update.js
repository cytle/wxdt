const shell = require('shelljs');
const path = require('path');
const nwPackageJson = require('../package.nw/package.json');

const PACKAGE_NAME = 'wechat-web-tools'; // package名字
const NW_VERSION = '0.24.4-sdk'; // 使用nwjs版本
const PACKAGE_NW_PATH = path.resolve(__dirname, '..', 'package.nw');

const PACKAGE_NW_PACKAGES_PATH = path.resolve(PACKAGE_NW_PATH, 'packages');

shell.mkdir('-p', PACKAGE_NW_PACKAGES_PATH);

function parseDependencies (list) {
    const result = {};
    for (const packageName in list) {
        const { from } = list[packageName];
        if (from.indexOf('@') !== -1) {
            shell.echo(packageName);
            result[packageName] = from.split('@')[1];
            continue;
        }

        shell.echo('self package:', packageName, from);

        result[packageName] = `file:./packages/${packageName}`;
        shell.cp('-R',
            path.resolve(PACKAGE_NW_PATH, 'node_modules', packageName),
            PACKAGE_NW_PACKAGES_PATH
        );
    }
    return result;
}

nwPackageJson.name = PACKAGE_NAME;

shell
    .echo(JSON.stringify(nwPackageJson))
    .to(path.resolve(PACKAGE_NW_PATH, 'package.json'));

shell.cd(PACKAGE_NW_PATH);

const npmList = shell.exec('npm list --depth=0 --json');

const newPackageJson = JSON.parse(npmList.stdout);

nwPackageJson.dependencies = parseDependencies(newPackageJson.dependencies);

nwPackageJson.dependencies.nw = NW_VERSION;

shell
    .echo(JSON.stringify(nwPackageJson, null, 2))
    .to(path.resolve(PACKAGE_NW_PATH, 'package.json'));
