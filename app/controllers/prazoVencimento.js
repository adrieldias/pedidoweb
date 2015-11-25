// app/controllers/prazoVencimento.js

module.exports = function(app) {
	
	var PrazoVencimento = app.models.prazoVencimento;
	
	var controller = {};
	
	controller.listaPrazosVencimento = function(req, res) {
		var promise = PrazoVencimento.find().exec()
			.then(function(prazosVencimento){
				res.json(prazosVencimento);
			},
			function(erro){
				console.error(erro)
				res.status(500).json(erro);
			}
		);
	};
	
	controller.obtemPrazoVencimento = function(req, res) {
		var _id = req.params.id;
		PrazoVencimento.findById(_id).exec()
			.then(
				function(prazoVencimento){
					if(!prazoVencimento) throw new Error("Prazo de Vencimento não encontrado");
					res.json(prazoVencimento);
				},
				function(erro){
					console.log(erro);
					res.status(404).json(erro);
				}
			);		
	};	
	return controller;
};