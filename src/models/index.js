const { db }  = require('../config/firebase')
const Task = require('./task')

module.exports = {
  Task: new Task(db)
}
