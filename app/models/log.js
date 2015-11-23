 //app/models/log.js
var mongoose = require('mongoose');

module.exports = function(){
	var schema = mongoose.Schema({
		cod_vendedor: {			
			type: mongoose.Schema.ObjectId,
			ref: 'Vendedor',
			required: true
		},
		dt_alteracao: {
			type: Date,
			required: true			
		},
		desc_alteracao: {
			type: String,
			required: true			
		}		
	});	
	return mongoose.model('Log', schema);	
};