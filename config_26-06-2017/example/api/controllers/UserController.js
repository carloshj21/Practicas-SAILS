/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
const waterfall = require('async/waterfall');

function createUser(req, res){
	//Pasar a wf
	console.log("Hola");
	User.create({
		nombre: req.body.nombre,
		password: req.body.password,
		edad: req.body.edad,
	}).exec((err, user) => {
		if(err){
			return res.status(500).send('Error');
		}
		return res.status(201).send('Entré al controlador');
	});
}
function readUsers(req, res){
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
}

function saludo(req, res){
	coso(req.params.nombre);
	color("Hola " + req.params.nombre);
	res.ok("Hola " + req.params.nombre);
}

function login(req, res){
	req.session.nombre = req.params.nombre;
	res.ok();
}

module.exports = {
	createUser,
	readUsers,
	saludo,
	login,
};
