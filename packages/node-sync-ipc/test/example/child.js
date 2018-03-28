/**
 * @file child.js
 *
 * Created by mmhunter on 17/10/2017.
 */
const syncIpc = require('../../index').child();

console.log('child ready');

setInterval(() => {
  console.log(syncIpc.sendSync('foo', 'echo content'));
});
