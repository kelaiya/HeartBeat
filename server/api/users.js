
const router = require('express').Router()
const {User, Data} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
	User.findAll({where: req.query})
  .then(data => res.json(data))
  .catch(next);
})