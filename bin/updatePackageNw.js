/**
 * 更新package.nw源代码
 */

const os = require('os');
const shell = require('shelljs');

console.log();

const PACKAGE_NW_PATH = path.resolve(__dirname, '..', 'package.nw');

// shell.cp('-r', path.resolve(os.homedir(), '.wine/drive_c/Program Files (x86)/Tencent/微信web开发者工具/package.nw'), )

//
// 0. 新建tmp或是清空tmp文件夹
// 1. 使用wine安装开发者工具
// 2. 把开发者工具文件夹拷贝到tmp
// 3. 使用updateDependencies更新package.json
// 4. fix node-sync-ipc 将tmp/packages/node-sync-ipc用package.nw/packages/node-sync-ipc替换
// 5. 将tmp/node_modules用package.nw/node_modules替换
// 6. 将package.nw用tmp替换
// 7. 升级package.nw目录下依赖包
// 8. 测试
