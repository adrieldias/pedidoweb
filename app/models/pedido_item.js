// app/models/pedido_item.js
var mongoose = require('mongoose');

module.exports = function(){
	var schema = mongoose.Schema({
		cod_pedido_item: {
			type: Number,
			required: true,
			index:{
				unique: true
			}
		},
		cod_pedido: {
			type: Number,
			required: true,			
		},
		
	});
	
	return mongoose.model('Pedido_item', schema);
};