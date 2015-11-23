// app/models/produto.js
var mongoose = require('mongoose');

module.exports = function(){
	var schema = mongoose.Schema({
		cod_produto: {
			type: Number,
			required: true
		},
		descricao: {
			type: String,
			required: true
		},
		perc_desconto_maximo: {
			type: Number,
			required: true
		},
		unidade_medida: {
			type: String
		},
		preco_varejo: {
			type: Number
		},
		situacao: {
			type: Boolean,
			required: true
		}		
	});
	
	return mongoose.model('Produto', schema);
};