const { Router } = require('express')
const routes = Router();
const PeopleController = require('./controller/FilmeController')

 routes.put('/people', PeopleController.update);
 routes.get('/people/:_id', PeopleController.show);
 routes.patch('/people/update/:id', PeopleController.updatePatch)
 routes.delete('/people/:_id', PeopleController.destroy);


 module.exports = routes