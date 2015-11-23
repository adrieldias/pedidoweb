// app/models/prazoVencimento.js
var mongoose = require('mongoose');

module.exports = function(){
	var schema = mongoose.Schema({
		cod_prazo_vencimento: {
			type: Number,
			required: true
		},
		descricao: {
			type: String,
			required: true
		}
	});
	
	return mongoose.model('PrazoVencimento', schema);
};