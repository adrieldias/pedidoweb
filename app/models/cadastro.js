// app/models/cadastro.js
var mongoose = require('mongoose');

module.exports = function(){
	var schema = mongoose.Schema({
		cod_cadastro: {
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
		},
		cpf_cnpj: {
			type: String
		},
		email: {
			type: String
		},
		situacao: {
			type: Boolean,
			required: true
		}		
	});
	
	return mongoose.model('Cadastro', schema);
};