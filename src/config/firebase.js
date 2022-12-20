const firebase = require('firebase-admin')
const serviceAccount = require('../../firebase-credentials.json')

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: process.env.FIREBASE_DATABASE_URL
})

const db = firebase.database()

module.exports = { db }
