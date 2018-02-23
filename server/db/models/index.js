const User = require('./user')
const Data = require('./data')

Data.belongsTo (User);

module.exports = {
  User: User,
  Data: Data
}