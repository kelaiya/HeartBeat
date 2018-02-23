const User = require('./user')
const Data = require('./data')

// User has many Data
Data.belongsTo (User);

module.exports = {
  User: User,
  Data: Data
}