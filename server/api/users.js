
const router = require('express').Router()
const {User, Data} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
	Data.findAll({ where: req.query },
	             include: [{
      model: User,
      through: { 
        attributes: ['userId']}
      }])
  .then(data => res.json(data))
  .catch(next);
})