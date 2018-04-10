# wxdt

微信开发者工具, 作为npm包

## CONTRIBUTING

这项目目的是产生一个轻量的开发者工具使用npm包(工具源码+工具私库包)

### 目录结构如下

```
.
├── README.md
├── bin
│   ├── upgradeWxdt.js      // 更新package.nw源代码脚本
│   └── wxdt.js             // 启动wxdt脚本，需要移动到package.nw下使用
├── lib
│   └── updatePackageJson.js
├── package.nw              // wxdt npm包，执行upgradeWxdt产物，用于发布
├── package-lock.json
├── package.json
├── packages                // 为兼容修改后的包
│   └── node-sync-ipc
└── yarn.lock
```

### TODOs

- [ ] 更新脚本
  - [ ] 下载和安装开发者工具
  - [x] 处理私库包兼容（如`node-sync-ipc`）
  - [x] 更新工具`package.json`, 并且处理私库依赖情况
  - [x] `nw.js`使用
- [x] 使用脚本
  - [x] 启动工具
  - [ ] 替换`wcc`/`wcsc`
