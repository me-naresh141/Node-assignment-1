console.log('Welcome to Nodejs')

let os = require('os')
console.log(os.cpus().length)
console.log(os.freemem())
console.log(os.totalmem() / 1024 / 1024 / 1024)
console.log(os.uptime())
console.log(os.type())
// console.log(os.arch())
// console.log(os.userInfo())
// console.log(os.release())
// console.log(os.platform())

let { readFile, unlink } = require('fs')

// 2


// 3

let buff = Buffer.alloc(12)
 buff = buff.write('hello  buffer is global module')
console.log(buff.toString())