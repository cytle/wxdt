module.exports = async function (done) {
  return new Promise(async (resolve, reject) => {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, 1000)
    })
    resolve(true)
  })
}
