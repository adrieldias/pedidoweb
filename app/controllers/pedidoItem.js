// app/controllers/pedidoItem.js

module.exports = function(app) {
	
	var PedidoItem = app.models.pedidoItem;
	
	var controller = {};
	
	controller.listaPedidoItens = function(req, res) {
		var promise = PedidoItem.find().exec()
			.then(function(pedidoItens){
				res.json(pedidoItens);
			},
			function(erro){
				console.error(erro)
				res.status(500).json(erro);
			}
		);
	};
	
	controller.obtemPedidoItem = function(req, res) {
		var _id = req.params.id;
		PedidoItem.findById(_id).exec()
			.then(
				function(pedidoItem){
					if(!pedidoItem) throw new Error("Contato não encontrado");
					res.json(pedidoItem);
				},
				function(erro){
					console.log(erro);
					res.status(404).json(erro);
				}
			);		
	};
	controller.removePedidoItem = function(req, res) {
		var _id = req.params.id;
		PedidoItem.remove({"_id": _id}).exec()
			.then(
				function(){
					res.end();
				},
				function(erro){
					return console.error(erro);
				}
			);
	};
	controller.salvaPedidoItem = function(req, res) {
		var _id = req.body._id;
		
		//req.body.emergencia = req.body.emergencia || null;
		
		if(_id) {
			PedidoItem.findByIdAndUpdate(_id, req.body).exec()
				.then(
					function(pedidoItem){
						res.json(pedidoItem);
					},
					function(erro){
						console.error(erro);
						res.status(500).json(erro);
					}
				);
		}
		else {
//			Pedido.create(req.body)
//				.then(
//					function(pedido){
//						res.status(201).json(pedido);
//					},
//					function(erro){
//						console.log(erro);
//						res.status(500).json(erro);
//					}
//				)
		}		
	};
	
	function adiciona(pedidoItemNovo){
		
	}	
	function atualiza(pedidoItemAlterar) {
		
	}
	
	return controller;
};