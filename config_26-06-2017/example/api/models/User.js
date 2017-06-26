/**
 * User.js
 *
 * @description :: Implementación de un modelo de usuario
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

const bcrypt = require('bcrypt');
module.exports = {

  attributes: {
	  nombre:{
		type: 'string' , 
		required: true,
	  },
	  password:{
		type: 'string',
		required: true,
	  },
	  edad:{
		type: 'integer',
		required: true,
		defaultsTo: 5,
	  },
	  amigo: {
		  collection: 'user',
		 via: 'id',
	  },
	  saluda: () => {
		console.log('Hola');  
	  },
  },
	beforeCreate: (values,cb) => {
		bcrypt.hash(values.password, 10, (err, hash) => {
			if(err){
				return cb(err);
			}
			values.password = hash;
			return cb(null, values);
		});
	},
	saluda: () => {
		console.log('Adios');  
	},
};

