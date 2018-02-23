const router = require('express').Router()
const {User, Data} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Data.findAll({where: req.query})
  .then(data => res.json(data))
  .catch(next);
})

router.get('/:id', (req, res, next) => {
	const id = req.params.id
	Data.findAll(
	      {
	       where:{
      userId : id
    },
	     include: [{
      	model: User
      }]
     })
  .then(data => res.json(data))
  .catch(next);
})