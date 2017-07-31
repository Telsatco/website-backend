exports.LogError = (input) => {
  'use strict'
  let fs = require('fs')
  let date = new Date()
  fs.open('log_errores.txt', 'r+', (err, fd) => {
    if (err) return console.error(err)
    const text = `${date.getFullYear()}/
        ${(date.getMonth() + 1)}/${date.getDate()} ${date.getHours()}: 
        ${date.getMinutes()} --> ${input}\r\n\r\n`
    fs.appendFile('log_errores.txt', text, (err) => {
      if (err) return console.log(err)
      fs.close(fd, (err) => { if (err) return console.log(err) })
    })
  })
}
