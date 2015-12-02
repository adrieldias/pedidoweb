// app/controllers/produto.js

module.exports = function(app) {
	
	var Produto = app.models.produto;
	
	var controller = {};
	
	controller.listaProdutos = function(req, res) {
		var promise = Produto.find().exec()
			.then(function(produtos){
				res.json(produtos);
			},
			function(erro){
				console.error(erro)
				res.status(500).json(erro);
			}
		);
	};
	
	controller.obtemProduto = function(req, res) {
		var _id = req.params.id;
		Produto.findById(_id).exec()
			.then(
				function(produto){
					if(!produto) throw new Error("Produto não encontrado");
					res.json(produto);
				},
				function(erro){
					console.log(erro);
					res.status(404).json(erro);
				}
			);		
	};
	//controller.removeProduto = function(req, res) {
	//	var _id = req.params.id;
	//	Produto.remove({"_id": _id}).exec()
	//		.then(
	//			function(){
	//				res.end();
	//			},
	//			function(erro){
	//				return console.error(erro);
	//			}
	//		);
	//};
	//controller.salvaContato = function(req, res) {
	//	var _id = req.body._id;
		
	//	req.body.emergencia = req.body.emergencia || null;
		
	//	if(_id) {
	//		Contato.findByIdAndUpdate(_id, req.body).exec()
	//			.then(
	//				function(contato){
	//					res.json(contato);
	//				},
	//				function(erro){
	//					console.error(erro);
	//					res.status(500).json(erro);
	//				}
	//			);
	//	}
	//	else{
//			Contato.create(req.body)
//				.then(
//					function(contato){
//						res.status(201).json(contato);
//					},
//					function(erro){
//						console.log(erro);
//						res.status(500).json(erro);
//					}
//				)
//		}
//	};
	
	//function adiciona(contatoNovo){
		
	//}
	
	//function atualiza(contatoAlterar) {
		
	//}
	
	return controller;
};