/**
 * @file parent.js
 *
 * Created by mmhunter on 17/10/2017.
 */
const syncIpc = require('../../index').parent();

// fork the child process just like child_process.fork()
const child = syncIpc.fork('./child.js');

child.onSync('foo', (res, bar) => {
  bar = `${bar} ${bar}`;
  // block the child process for one second
  // the first argument will be passed to child process as the result
  setTimeout(() => {
    res(bar);
  }, 1000);
});
