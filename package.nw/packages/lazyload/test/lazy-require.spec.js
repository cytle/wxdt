const assert = require('assert')
const getType = target => Object.prototype.toString.call(target).slice(8, -1).toLowerCase()

describe('test Array: [1,2,3] ', function () {
  let lazyRequire

  beforeEach(function () {
    lazyRequire = require('../lazy-require.js')
  })

  it('access array element', function () {
    const array = lazyRequire('./folder/array.js')
    assert.equal(array[0] === 1 && array[1] === 2 && array[2] === 3, true)
  })

  it('for...in', function () {
    const array = lazyRequire('./folder/array.js')
    const copy = []
    for (let i in array) {
      copy[i] = array[i]
    }
    assert.equal(copy[0] === 1 && copy[1] === 2 && copy[2] === 3 && copy.length === 3, true)
  })

  it('for...of', function () {
    const array = lazyRequire('./folder/array.js')
    const copy = []
    for (let i of array) {
      copy.push(i)
    }
    assert.equal(copy[0] === 1 && copy[1] === 2 && copy[2] === 3 && copy.length === 3, true)
  })

  it('get type with: Object.prototype.toString.call', function() {
    const array = lazyRequire('./folder/array.js')
    assert.equal(getType(array), 'array')
  })

})

describe('test number: 123', function () {
  let lazyRequire

  beforeEach(function () {
    lazyRequire = require('../lazy-require.js')
  })

  it('equality', function () {
    const number = lazyRequire('./folder/number.js')
    assert.equal(number == 123, true)
  })

  it('add number', function () {
    const number = lazyRequire('./folder/number.js')
    assert.equal(number + 123, 246)
  })

  it('get type with: Object.prototype.toString.call', function() {
    const number = lazyRequire('./folder/number.js')
    assert.equal(getType(number), 'number')
  })

})

describe('test string: test', function () {
  let lazyRequire

  beforeEach(function () {
    lazyRequire = require('../lazy-require.js')
  })

  it('concat', function () {
    const str = lazyRequire('./folder/string.js')
    assert.equal(str + ' hello', 'test hello')
  })

  it('for...of', function () {
    const str = lazyRequire('./folder/string.js')
    let o = 'test', counter = 0
    for (let c of str) {
      assert.equal(c, o[counter++])
    }
    assert.equal(o.length, str.length)
  })

  it('get type with: Object.prototype.toString.call', function() {
    const string = lazyRequire('./folder/string.js')
    assert.equal(getType(string), 'string')
  })

})

describe('test object: {name: "test", age: 20}', function () {
  let lazyRequire

  beforeEach(function () {
    lazyRequire = require('../lazy-require.js')
  })

  it('access object property', function () {
    const object = lazyRequire('./folder/object.js')
    assert.equal(object.name, 'test')
    assert.equal(object.age, 20)
  })

  it('object keys', function() {
    const object = lazyRequire('./folder/object.js')
    assert.equal(Object.keys(object).length, 2)
  })

  it('get type with: Object.prototype.toString.call', function() {
    const object = lazyRequire('./folder/object.js')
    assert.equal(getType(object), 'object')
  })

})

describe('test function: function () { return true }', function () {
  let lazyRequire

  beforeEach(function () {
    lazyRequire = require('../lazy-require.js')
  })

  it('get return value', function () {
    const f = lazyRequire('./folder/function.js')
    assert.equal(f(), true)
  })

  it('object keys for function', function() {
    const f = lazyRequire('./folder/function.js')
    f.someAttr = 'some value'
    assert.equal(Object.keys(f).length, 1)
  })

  it('get type with: Object.prototype.toString.call', function() {
    const f = lazyRequire('./folder/function.js')
    assert.equal(getType(f), 'function')
  })

})

describe('test generator: yield one, two, three', function () {
  let lazyRequire

  beforeEach(function () {
    lazyRequire = require('../lazy-require.js')
  })

  it('yield one by one', function () {
    const generator = lazyRequire('./folder/generator.js')
    const f = generator()
    let ret, str = ''
    while (!(ret = f.next()).done) {
      str += ret.value
    }
    assert.equal(str, 'onetwothree')
  })

  it('get type with: Object.prototype.toString.call', function() {
    const generator = lazyRequire('./folder/generator.js')
    assert.equal(getType(generator), 'generatorfunction')
  })

})

describe('test es7 async function', function () {
  let lazyRequire

  beforeEach(function () {
    lazyRequire = require('../lazy-require.js')
  })

  it('should done', async function () {
    const asyncFunc = lazyRequire('./folder/asyncFunction.js')
    assert.ok(await asyncFunc())
  })

  it('get type with: Object.prototype.toString.call', function() {
    const asyncFunc = lazyRequire('./folder/asyncFunction.js')
    assert.equal(getType(asyncFunc), 'asyncfunction')
  })

})
