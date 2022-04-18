const People = require('../Model/People')
const people2 = require("../connecton")
const { connect } = require("../routes")

module.exports = {
    async show (request, response){
        People.findById(request.params._id)
        .then(idFound => {
            if(!idFound){ return response.res.status(404).end(); }
            return response.status(200).json(idFound);
        })
        .catch(err => next(err)); 
        console.log('GET /people/:id People.show', request.params)
    },
    async show2 (request, response, next){
        const result = []
        console.log(request.params.id)
        await people2.con.query(
            `SELECT * FROM people WHERE idPeople = ${request.params.id}`, 
            (err, rows) => {
            if (err) { 
                return response.status(404).send(err) 
            }
        
            rows.forEach(row => {
                result.push(row)
                console.log(`Esse foi o resultado: \n ${row.gander} by ${row.name}, ${row.age}`)
            });
            console.log('GET /people:id People.show', request.params);
            return response.json(result)
        })
     },
}
