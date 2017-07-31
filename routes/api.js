const express = require('express')
const router = express.Router()
const config = require('../config.js')
const MongoClient = require('mongodb').MongoClient
const url = `mongodb://${config.host}:${config.port}/${config.dataBase}`
const errorLog = require('../logErrors')

// Informacion sobre contacto para el footer de la pagina
router.get('/footer', (req, res) => {
  MongoClient.connect(url, (err, db) => {
    if (err) {
      db.close()
      errorLog(`${err} --> ref.line 12`)
      res.status(500).json({ msg: 'Database connection failed, footer', code: '01' })
    }
    findDocuments({database: db, table: 'telsatContact', query: {}, projection: {_id: false}}, (msgError, docs) => {
      db.close()
      if (msgError.code !== '0') {
        res.status(500).json(msgError)
      }
      res.status(200).json(docs)
    })
  })
})

// Informacion sobre los botones del header, e informacion de introduccion
router.get('/headerBtn', (req, res) => {
  MongoClient.connect(url, (err, db) => {
    if (err) {
      db.close()
      errorLog(`${err} --> ref.line 26`)
      res.status(500).json({ msg: 'Database connection failed, headerBtn', code: '02' })
    }
    findDocuments({database: db, table: 'headerButtons', query: {}, projection: { _id: false }}, (msgError, docs) => {
      db.close()
      if (msgError.code !== '0') {
        res.status(500).json(msgError)
      }
      res.status(200).json(docs)
    })
  })
})

router.get('/projects', (req, res) => {
  MongoClient.connect(url, (err, db) => {
    if (err) {
      db.close()
      errorLog(`${err} --> ref.line 40`)
      res.status(500).json({ msg: 'Database connection failed, projects', code: '03' })
    }
    findDocuments({database: db, table: 'projects', query: {}, projection: { _id: false }}, (msgError, docs) => {
      db.close()
      if (msgError.code !== '0') {
        res.status(500).json(msgError)
      }
      res.status(200).json(docs)
    })
  })
})

router.get('/techDivisions', (req, res) => {
  MongoClient.connect(url, (err, db) => {
    if (err) {
      db.close()
      errorLog(`${err} --> ref.line 53`)
      res.status(500).json({ msg: 'Database connection failed, techDivisions', code: '04' })
    }
    findDocuments({ database: db, table: 'techDivisions', query: {}, projection: { _id: false } }, (msgError, docs) => {
      db.close()
      if (msgError.code !== '0') {
        res.status(500).json(msgError)
      }
      res.status(200).json(docs)
    })
  })
})

router.get('/providers', (req, res) => {
  MongoClient.connect(url, (err, db) => {
    if (err) {
      db.close()
      errorLog(`${err} --> ref.line 66`)
      res.status(500).json({ msg: 'Database connection failed, providers', code: '05' })
    }
    findDocuments({ database: db, table: 'providers', query: {}, projection: { _id: false } }, (msgError, docs) => {
      db.close()
      if (msgError.code !== '0') {
        res.status(500).json(msgError)
      }
      res.status(200).json(docs)
    })
  })
})

router.get('/clients', (req, res) => {
  MongoClient.connect(url, (err, db) => {
    if (err) {
      db.close()
      errorLog(`${err} --> ref.line 79`)
      res.status(500).json({ msg: 'Database connection failed, clients', code: '06' })
    }
    findDocuments({ database: db, table: 'clients', query: {}, projection: { _id: false } }, (msgError, docs) => {
      db.close()
      if (msgError.code !== '0') {
        res.status(500).json(msgError)
      }
      res.status(200).json(docs)
    })
  })
})

router.get('/aboutUs', (req, res) => {
  MongoClient.connect(url, (err, db) => {
    if (err) {
      db.close()
      errorLog(`${err} --> ref.line 92`)
      res.status(500).json({ msg: 'Database connection failed, aboutUs', code: '07' })
    }
    findDocuments({ database: db, table: 'aboutUs', query: {}, projection: { _id: false } }, (msgError, docs) => {
      db.close()
      if (msgError.code !== '0') {
        res.status(500).json(msgError)
      }
      res.status(200).json(docs)
    })
  })
})

router.post('/sectors', (req, res) => {
  let params = req.body
  MongoClient.connect(url, (err, db) => {
    if (err) {
      db.close()
      errorLog(`${err} --> ref.line 106`)
      res.status(500).json({ msg: 'Database connection failed, sectors', code: '08' })
    }
    findDocuments({ database: db, table: 'sectors', query: params, projection: { _id: false } }, (msgError, docs) => {
      db.close()
      if (msgError.code !== '0') {
        res.status(500).json(msgError)
      }
      res.status(200).json(docs)
    })
  })
})

router.post('/sectorsUncles', (req, res) => {
  let params = req.body
  MongoClient.connect(url, (err, db) => {
    if (err) {
      db.close()
      errorLog(`${err} --> ref.line 120`)
      res.status(500).json({ msg: 'Database connection failed, sectorsUncles', code: '09' })
    }
    let collection = db.collection('sectors')
    collection.findOne({id: params.parent}, (err, parentDoc) => {
      if (err) {
        db.close()
        errorLog(`${err} --> ref.line 126`)
        res.status(500).json({ msg: 'DataBase query request failed (parentDoc), sectorsUncles', code: '10' })
      }
      collection.find({parent: parentDoc.parent}).toArray((err, unclesDocs) => {
        db.close()
        if (err) {
          errorLog(`${err} --> ref.line 131`)
          res.status(500).json({ msg: 'DataBase query request failed (unclesDocs), sectorsUncles', code: '11' })
        }
        res.status(200).json(unclesDocs)
      })
    })
  })
})

// Funcion que realiza la consulta a la base de datos de mongoDB
let findDocuments = ({ database, table, query = {}, projection = {} }, callback) => {
  let collection = database.collection(table)
  collection.find(query, projection).toArray((err, docs) => {
    let msgError = {msg: '', code: '0'}
    if (err) {
      errorLog(`${err} --> ref.line 146`)
      msgError = { msg: 'DataBase query request failed, findDocuments', code: '12' }
    }
    callback(msgError, docs)
  })
}

module.exports = router
