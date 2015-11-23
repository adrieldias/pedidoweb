// app/models/transportador.js
var mongoose = require('mongoose');

module.exports = function(){
	var schema = mongoose.Schema({
		cod_transportador: {
			type: Number,
			required: true
		},
		nome: {
			type: String,
			required: true
		}
	});
	
	return mongoose.model('Transportador', schema);
};