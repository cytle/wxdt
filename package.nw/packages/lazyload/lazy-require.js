const path = require('path')

// 在 lazyRequire 一个文件时才动态取当前文件夹，缓存目录文件夹
let dir
function lazyRequire(filename) {
  if (!dir) {
    dir = path.resolve(module.parent.filename, '..')
  }

  return proxyRequire(dir, filename)
}

function proxyRequire(dirname, filename) {
  const fakeTarget = function () { }
  let cache

  return new Proxy(fakeTarget, {
    // require 的目标可能是 对象、函数、数字、字符串、数组

    // getter & setter 用于处理 对象 的情况
    get(target, property) {
      if (!cache) {
        execRequire()
      }

      return cache[property]
    },

    set(target, property, value) {
      if (!cache) {
        execRequire()
      }

      cache[property] = value
      return true
    },

    // apply 用于处理 函数 的情况
    apply(target, thisArg, argumentsList) {
      if (!cache) {
        execRequire()
      }

      return cache.apply(thisArg, argumentsList)
    },

    // construct 用于处理 new 操作的情况
    construct(target, argumentsList, newTarget) {
      if (!cache) {
        execRequire()
      }

      return new cache(...argumentsList)
    },

    // has 用于处理 in 操作符的情况
    has(target, prop) {
      if (!cache) {
        execRequire()
      }

      return prop in cache
    },

    // 以下两个函数用于处理 for...in 和 iterator
    ownKeys(target) {
      if (!cache) {
        execRequire()
      }

      let descriptors = Object.getOwnPropertyDescriptors(cache)
      delete descriptors['valueOf']
      delete descriptors['toString']

      return Array.from(new Set(['arguments', 'caller', 'prototype', 'name', 'length', Symbol.toStringTag].concat(Object.keys(descriptors))))
    },

    getOwnPropertyDescriptor(target, prop) {
      if (cache.hasOwnProperty(prop)) {
        if (getType(cache) === 'Array' && prop === 'length') {
          return {
            configurable: true,
            enumerable: false,
            writable: true
          }
        } else return Object.getOwnPropertyDescriptor(cache, prop)

      } else if (prop === 'arguments') {
        return {
          configurable: false,
          enumerable: false,
          writable: false,
          value: null
        }
      } else if (prop === 'caller') {
        return {
          configurable: false,
          enumerable: false,
          writable: false,
          value: null
        }
      } else if (prop === 'prototype') {
        return {
          configurable: false,
          enumerable: false,
          writable: false,
          value: null
        }
      } else if (prop === 'length') {
        return {
          configurable: true,
          enumerable: false,
          writable: false,
          value: 0
        }
      } else if (prop === 'name') {
        return {
          configurable: true,
          enumerable: false,
          writable: false,
          value: ''
        }
      } else {
        return {
          configurable: true,
          enumerable: true,
          writable: true
        }
      }
    }
  })

  function execRequire() {
    let t
    if (filename.startsWith('./') || filename.startsWith('../')) {
      cache = Object(t = require(path.join(dirname, filename)))
    } else {
      cache = Object(t = require(filename))
    }

    // valueOf 用于处理是数值的情况
    // 设置 configurable 和 enumerable 为 false 来防止是 for...in 时被遍历，另外这里需要做保护，防止是 String 被类型转换成 Number
    if (getType(cache) !== 'String') {
      Object.defineProperty(cache, 'valueOf', {
        configurable: false,
        writable: true,
        enumerable: false,
        value: () => Number(t.valueOf())
      })
    } else {
      Object.defineProperty(cache, 'valueOf', {
        configurable: false,
        writable: true,
        enumerable: false,
        value: () => String(t.valueOf())
      })
    }

    // toString 用于处理是字符串的情况
    // 设置 configurable 和 enumerable 为 false 来防止是 for...in 时被遍历
    Object.defineProperty(cache, 'toString', {
      configurable: false,
      writable: true,
      enumerable: false,
      value: () => String(t.toString())
    })

    // 代理 Symbol.toStringTag 以保证用 Object.prototype.toString.call 获取类型时能够获取正确的类型
    if (!cache.hasOwnProperty(Symbol.toStringTag)) {
      const realType = getType(t)
      Object.defineProperty(cache, Symbol.toStringTag, {
        get: function () {
          return realType
        },
        configurable: true,
      })
    }

  }

  function getType(target) {
    return Object.prototype.toString.call(target).slice(8, -1)
  }

  function isFunctionType(target) {
    return Object.prototype.toString.call(target).slice(-9, -1) === 'Function'
  }
}

// 通过 getter 和 setter 让 lazyRequire 这个 module 不被 cache
function preventCache() {
  const modulePath = require.resolve(module.filename)

  if (require.cache[modulePath]) {
    require.cache[modulePath] = undefined

    Object.defineProperty(require.cache, modulePath, {
      configurable: true,
      enumerable: true,
      set() { },
      get() {
        return undefined
      }
    })
  }
}

preventCache()

module.exports = lazyRequire
