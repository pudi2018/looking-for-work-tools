const express = require('express')
const app = express()
const mongoose = require('mongoose')
// 链接mongo 并且使用这个集合
const DB_URL = 'mongodb://127.0.0.1:27017/imooc'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function () {
  console.log('mongo connect success')
})

const User = mongoose.model('user', new mongoose.Schema({
  user: {
    type: String,
    require: true
  },
  age: {
    type: Number,
    require: true
  }
}))
// // 新增数据
// User.create({
//   user: 'pudi',
//   age: 16
// }, function (err, doc) {
//   if (!err) {
//     console.log(doc)
//   } else {
//     console.log(err)
//   }
// })

// 更新数据
User.update({'user': 'pudi'}, {'$set': {age: 26}}, function (err, doc) {
  console.log(doc, err)
})
// // 删除
// User.remove({age: 18}, function (err, doc) {
//   console.log(doc, err)
// })
app.get('/', function (req, res) {
  res.send('<h1>Hello world</h1>')
})
app.get('/data', function (req, res) {
  User.find({}, function (err, doc) {
    console.log(err)
    res.json(doc)
  })
})
app.listen(9093, function () {
  console.log('Node start')
})
