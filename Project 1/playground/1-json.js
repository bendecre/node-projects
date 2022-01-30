const fs = require('fs')

// const book = {
//     title: 'Beyond Good and Evil',
//     author: 'Friedrich Nietzsche'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)

user.name = 'Ben'
user.age = '25'

const personJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', personJSON)