const Sequelize = require('sequelize')
const db = require('../db')

// Data model will contain information about the appoinments of patients.
const Data = db.define('data', {
  date: {
    type: Sequelize.DATE,
    allowNull: false
  },
  time: {
    type: Sequelize.DATE
  },
  docName: {
    type: Sequelize.STRING
  }
})

module.exports = Data