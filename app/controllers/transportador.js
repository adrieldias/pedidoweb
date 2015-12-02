// app/controllers/transportador.js

module.exports = function(app) {
	
	var Transportador = app.models.transportador;
	
	var controller = {};
	
	controller.listaTransportadores = function(req, res) {
		var promise = Transportador.find().exec()
			.then(function(transportadores){
				res.json(transportadores);
			},
			function(erro){
				console.error(erro)
				res.status(500).json(erro);
			}
		);
	};
	
	controller.obtemTransportador = function(req, res) {
		var _id = req.params.id;
		Transportador.findById(_id).exec()
			.then(
				function(transportador){
					if(!transportador) throw new Error("Transportador não encontrado");
					res.json(transportador);
				},
				function(erro){
					console.log(erro);
					res.status(404).json(erro);
				}
			);		
	};	
	
	return controller;
};