/**
 * 启动wxdt
 */

require('child_process').spawn(
  require('nw').findpath(), // eslint-disable-line
  ['.'].concat(process.argv.slice(2)),
  {
    cwd: __dirname,
    detached: true,
    stdio: 'ignore',
  },
).unref();
