var fs = require('fs')

const student = JSON.parse(fs.readFileSync('data.txt','utf8'))

console.log(student)

student.push(2)

fs.writeFileSync('data.txt', JSON.stringify(student))

console.log(student)