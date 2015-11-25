// app/models/pedido_item.js
var mongoose = require('mongoose');

module.exports = function(){
	var schema = mongoose.Schema({
		cod_pedido_item: {
			type: Number,
			required: true,
			index:{unique: true}
		},		
		
		cod_produto: {
			type: mongoose.Schema.ObjectId,	ref: 'Produto',
			required: true,			
		},
		
		qt_quantidade: {
			type: Number,
			required: true,			
		},
		
		perc_desconto: {
			type: Number,
			required: true,			
		},
		
		desc_observacao: {
			type: String,						
		},
		
		val_unitario: {
			type: Number,
			required: true,			
		},
		
	});	
	return mongoose.model('Pedido_item', schema);
};