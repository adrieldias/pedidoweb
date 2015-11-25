// app/controllers/cadastro.js

module.exports = function(app) {
	
	var Cadastro = app.models.cadastro;
	
	var controller = {};
	
	controller.listaCadastros = function(req, res) {
		var promise = Cadastro.find().exec()
			.then(function(cadastros){
				res.json(cadastros);
			},
			function(erro){
				console.error(erro)
				res.status(500).json(erro);
			}
		);
	};
	
	controller.obtemCadastro = function(req, res) {
		var _id = req.params.id;
		Cadastro.findById(_id).exec()
			.then(
				function(cadastro){
					if(!cadastro) throw new Error("Cadastro não encontrado");
					res.json(cadastro);
				},
				function(erro){
					console.log(erro);
					res.status(404).json(erro);
				}
			);		
	};	
	return controller;
};