const Sequelize = require('sequelize')
const db = require('../db')

const User = db.define('user', {
  name: {
    type: Sequelize.STRING
  },
  image: {
    type: Sequelize.TEXT
  }
})

module.exports = User
