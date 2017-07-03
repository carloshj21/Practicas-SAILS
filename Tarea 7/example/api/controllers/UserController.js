/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
const waterfall = require('async/waterfall');

function createUserWt(req, res){
	//Pasar a wf
	waterfall([
		(consolelog) =>{
			console.log("Hola");
			consolelog(null);
		},
		(create) =>{
			User.create({
				nombre: req.body.nombre,
				password: req.body.password,
				edad: req.body.edad,
			}).exec(create);
		},
	],(err, user) => {
        if (err) {
          return res.status(500).send('Error');
        }
        return res.status(201).send('Entré al controlador');
    });
	/*console.log("Hola");
	User.create({
		nombre: req.body.nombre,
		password: req.body.password,
		edad: req.body.edad,
	}).exec((err, user) => {
		if(err){
			return res.status(500).send('Error');
		}
		return res.status(201).send('Entré al controlador');
	});*/
}

function createUserProm(req,res){
	console.log("Hola");
	User.create({
		nombre: req.body.nombre,
		password: req.body.password,
		edad: req.body.edad,
	})
	.then(() =>{
			return res.status(201).send('Usuario Creado');
	})
	.catch((err) => {
		return res.status(500).send('Error');
	});
}

/*function readUsersWt(req, res){

function readUsersProm(req, res){
	return User.find()
		.then((foundUsers) => {
			res.status(200).render('readUsers', {
				title: "Usuarios",
				users: foundUsers,
				layout: 'layout'
			});
		})
		.catch((err) => {
			res.status(500).send("Algo ocurrió.");
		});
}*/

module.exports = {
	createUserWt,
	createUserProm,
	readUsersWt,
	readUsersProm,
};
