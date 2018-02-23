const Sequelize = require('sequelize')
const db = require('../db')

// User model will have information about te names of all the patients.
const User = db.define('user', {
  name: {
    type: Sequelize.STRING
  },
  image: {
    type: Sequelize.TEXT
  },
  age: {
  	type: Sequelize.INTEGER
  }
})

module.exports = User
