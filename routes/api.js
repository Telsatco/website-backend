const express = require('express')
const router = express.Router()
const config = require('../config.js')
const MongoClient = require('mongodb').MongoClient
const url = `mongodb://${config.host}:${config.port}/${config.dataBase}`

router.get('/footer', (req, res) => {
  MongoClient.connect(url, (err, db) => {
    if (err) throw res.status(500).jsonp({ err: 'Error de conexion con la base de datos.' })
    findDocuments(db, 'telsatContact', {}, {'_id': false}, (docs) => {
      db.close()
      res.json(docs)
    })
  })
})

let findDocuments = (db, table, query = {}, projection = {}, callback) => {
  let collection = db.collection(table)
  collection.find(query, projection).toArray((err, docs) => {
    if (err) throw err
    callback(docs)
  })
}

module.exports = router
