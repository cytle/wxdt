/**
 * 更新package.nw源代码脚本
 */

const os = require('os');
const shell = require('shelljs');
const { resolve } = require('path');
const updatePackageJson = require('../lib/updatePackageJson');

const tencentWxdtPath = resolve(
    os.homedir(),
    '.wine/drive_c/Program Files (x86)/Tencent/微信web开发者工具/package.nw',
);

shell.pushd(resolve(__dirname, '..'));

// 0. 清空tmp文件夹
shell.rm('-rf', 'tmp');

// TODO 1. 使用wine安装开发者工具

// 2. 把开发者工具文件夹拷贝到tmp
shell.cp('-R', tencentWxdtPath, 'tmp');

// 3. 使用updateDependencies更新package.json
updatePackageJson(resolve(process.cwd(), 'tmp'), {
  nwVersion: '0.24.4-sdk', // 使用nwjs版本
  packageExtends: {
    name: 'wxdt',
    scripts: {
      start: 'nw .',
    },
    bin: './wxdt.js',
  },
});

/**
 * 4. fix node-sync-ipc
 * 将tmp/packages/node-sync-ipc用package.nw/packages/node-sync-ipc替换
 */
shell.rm('-rf', 'tmp/packages/node-sync-ipc');
shell.cp('-r', 'packages/node-sync-ipc', 'tmp/packages/');

// 5. 复制wxdt到tmp
shell.cp('bin/wxdt.js', 'tmp/');

// 6. 将tmp/node_modules用package.nw/node_modules替换
shell.rm('-rf', 'tmp/node_modules');

if (shell.test('-d', 'package.nw') &&
  shell.test('-d', 'package.nw/node_modules') &&
  shell.test('-f', 'package.nw/yarn.lock')
) {
  shell.mv('package.nw/node_modules', 'package.nw/yarn.lock', 'tmp/');
}

// 7. 将package.nw用tmp替换
shell.rm('-rf', 'package.nw');
shell.mv('tmp', 'package.nw');

// 8. 升级package.nw目录下依赖包
shell.pushd('package.nw');
shell.exec('yarn install');
shell.popd();

// 9. 测试
shell.exec('./package.nw/wxdt.js');
shell.popd();
