'use strict';!function(require,directRequire){const a=require('http'),b=require('querystring'),c=require('url'),d=require('./c74067b2c1f476fa940f6315c56fb29e.js'),e=require('./36e525c1a6e2426c7d997e7f9a8c6422.js'),f=require('./255475b252265e53dc33aef13aaec01f.js'),g=require('./4bdb917920bd85e1641932560a1de532.js'),h=require('./920d321bdff16ce55755d23f89d32677.js'),i=require('./39a5a26425e46384a3e713be788200ee.js');let j;class k{constructor(){this.handlers=[]}add(a,b,c){this.handlers.push(async(d,e)=>{d.method===a&&d.mURL.pathname===b&&(await c(d,e))})}get(a,b){this.add('GET',a,b)}post(a,b){this.add('POST',a,b)}put(a,b){this.add('PUT',a,b)}delete(a,b){this.add('DELETE',a,b)}async process(a,d){a.mURL=c.parse(a.url),a.mQuery=b.parse(a.mURL.query),a.mURL.query=a.mQuery;for(let b of this.handlers)if(await b(a,d),d.finished)break}}(function(){j=new k,d.registerHandlers(j),e.registerHandlers(j),f.registerHandlers(j),g.registerHandlers(j),h.registerHandlers(j),global.CLI.isTestMode&&i.init()})(),module.exports={userRequestHandler:async function(a,b){j?await j.process(a,b):(b.statusCode=500,b.end('not initialized')),b.finished||i(a,b)}}}(require('lazyload'),require);