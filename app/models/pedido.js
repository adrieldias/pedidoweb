// app/models/pedido.js
var mongoose = require('mongoose');

module.exports = function(){
	var schema = mongoose.Schema({
		cod_pedido_cab: { type: Number, required: true },
		status: {type: String, required: true},
		prazoVencimento: {
			type: mongoose.Schema.ObjectId,
			ref: 'PrazoVencimento',
			required: true
		},
		observacao: {type: String},
		tipoFrete: {type: String},
		tranportador: {
			type: mongoose.Schema.ObjectId,
			ref: 'Transportador'
		},
		ordemCompra: {
			type: Number				
		},
		dataEmissao: {
			type: Date,
			required: true	
		},
		item: {
			type: mongoose.Schema.ObjectId,
			ref: 'Pedido_item'
		}
	});
	
	return mongoose.model('Pedido', schema);
};