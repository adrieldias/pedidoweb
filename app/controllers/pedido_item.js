// app/controllers/pedido_item.js

module.exports = function(app) {
	
	var Pedido_item = app.models.pedido_item;
	
	var controller = {};
	
	controller.listaPedido_itens = function(req, res) {
		var promise = Pedido_item.find().exec()
			.then(function(pedido_itens){
				res.json(pedido_itens);
			},
			function(erro){
				console.error(erro)
				res.status(500).json(erro);
			}
		);
	};
	
	controller.obtemPedido_item = function(req, res) {
		var _id = req.params.id;
		Pedido_item.findById(_id).exec()
			.then(
				function(pedido_item){
					if(!pedido_item) throw new Error("Contato não encontrado");
					res.json(pedido_item);
				},
				function(erro){
					console.log(erro);
					res.status(404).json(erro);
				}
			);		
	};
	controller.removePedido_item = function(req, res) {
		var _id = req.params.id;
		Pedido_item.remove({"_id": _id}).exec()
			.then(
				function(){
					res.end();
				},
				function(erro){
					return console.error(erro);
				}
			);
	};
	controller.salvaPedido_item = function(req, res) {
		var _id = req.body._id;
		
		//req.body.emergencia = req.body.emergencia || null;
		
		if(_id) {
			Pedido_item.findByIdAndUpdate(_id, req.body).exec()
				.then(
					function(pedido_item){
						res.json(pedido_item);
					},
					function(erro){
						console.error(erro);
						res.status(500).json(erro);
					}
				);
		}
		
	};
	
	function adiciona(pedido_itemNovo){
		
	}
	
	function atualiza(pedido_itemAlterar) {
		
	}
	
	return controller;
};