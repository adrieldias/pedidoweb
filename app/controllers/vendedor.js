// app/controllers/vendedor.js

module.exports = function(app) {
	
	var Vendedor = app.models.vendedor;
	
	var controller = {};
	
	controller.listaVendedores = function(req, res) {
		var promise = Vendedor.find().exec()
			.then(function(vendedores){
				res.json(vendedores);
			},
			function(erro){
				console.error(erro)
				res.status(500).json(erro);
			}
		);
	};
	
	controller.obtemVendedor = function(req, res) {
		var _id = req.params.id;
		Vendedor.findById(_id).exec()
			.then(
				function(vendedor){
					if(!vendedor) throw new Error("Vendedor não encontrado");
					res.json(vendedor);
				},
				function(erro){
					console.log(erro);
					res.status(404).json(erro);
				}
			);		
	};	
	return controller;
};