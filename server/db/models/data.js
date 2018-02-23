const Sequelize = require('sequelize')
const db = require('../db')

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