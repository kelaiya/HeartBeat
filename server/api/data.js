const router = require('express').Router()
const {User, Data} = require('../db/models')
module.exports = router

// the below route will give information about the appoinments of all the users.
router.get('/', (req, res, next) => {
  Data.findAll({where: req.query})
  .then(data => res.json(data))
  .catch(next);
})

// the below route will give information about the appoinments of a particular user.
router.get('/:id', (req, res, next) => {
	const id = req.params.id
	Data.findAll({
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