/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
const waterfall = require('async/waterfall');

function createUser(req, res)
{
	//Pasar a wf
	console.log("Hola");
	User.create({
		nombre: req.param('nombre'),
		password: req.param('password'),
		edad: req.param('edad'),
	}).exec((err, user) => {
		if(err){
			return res.status(500).send('Error');
		}
		return res.status(201).send('Usuario Registrado');
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
			res.status(500).send("No hay Usuarios Registrados.");
		});
}

function readUpdate(req, res){
	return User.find()
		.then((foundUsers) => {
			res.status(200).render('selectUpdate', {
				title: "Usuarios",
				users: foundUsers,
				layout: 'layout'
			});
		})
		.catch((err) => {
			res.status(500).send("No hay Usuarios Registrados.");
		});
}
function showUpdate(req, res){
	return User.findOne({
		id: req.param('id')
	}).then((showUser) => {
		console.log(showUser);
		res.status(200).render('showUpdateUs', {
			title: "Usuarios",
			users: showUser,
			layout: 'layout'
		});
	}).catch((err) => {
		res.status(500).send("No hay Usuarios Registrados.");
	});
}

function updateUser(req, res){

}

module.exports = {
	createUser,
	readUsers,
	updateUser,
	readUpdate,
	showUpdate,
};
