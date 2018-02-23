const Sequelize = require('sequelize')
const db = require('../db')

const User = db.define('user', {
  date: {
    type: Sequelize.DATE,
    allowNull: false
  },
  time: {
    type: Sequelize.DATE
  },
  name: {
    type: Sequelize.STRING
  },
  docName: {
    type: Sequelize.STRING
  },
  image: {
    type: Sequelize.TEXT
  }
})

module.exports = User
