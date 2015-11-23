// app/models/vendedor.js
var mongoose = require('mongoose');

module.exports = function(){
	var schema = mongoose.Schema({
		cod_vendedor: {
			type: Number,
			required: true
		},
		nome: {
			type: String,
			required: true
		},
		perc_desconto_maximo: {
			type: Number,
			required: true
		}
	});
	
	return mongoose.model('Vendedor', schema);
};