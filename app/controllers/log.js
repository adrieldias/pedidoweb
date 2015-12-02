// app/controllers/log.js

module.exports = function(app) {
	
	var Log = app.models.log;
	
	var controller = {};
	
	controller.listaLogs = function(req, res) {
		var promise = Log.find().exec()
			.then(function(logs){
				res.json(logs);
			},
			function(erro){
				console.error(erro)
				res.status(500).json(erro);
			}
		);
	};
	
	controller.obtemLog = function(req, res) {
		var _id = req.params.id;
		Log.findById(_id).exec()
			.then(
				function(log){
					if(!log) throw new Error("Log não encontrado");
					res.json(log);
				},
				function(erro){
					console.log(erro);
					res.status(404).json(erro);
				}
			);		
	};
	controller.removeLog = function(req, res) {
		var _id = req.params.id;
		Log.remove({"_id": _id}).exec()
			.then(
				function(){
					res.end();
				},
				function(erro){
					return console.error(erro);
				}
			);
	};
	controller.salvaLog = function(req, res) {
		var _id = req.body._id;
				
		if(_id) {
			Log.findByIdAndUpdate(_id, req.body).exec()
				.then(
					function(log){
						res.json(log);
					},
					function(erro){
						console.error(erro);
						res.status(500).json(erro);
					}
				);
		}
		else{
//			Log.create(req.body)
//				.then(
//					function(log){
//						res.status(201).json(log);
//					},
//					function(erro){
//						console.log(erro);
//						res.status(500).json(erro);
//					}
//				)
		}
	};
	
	function adiciona(logNovo){
		
	}
	
	function atualiza(logAlterar) {
		
	}
	
	return controller;
};