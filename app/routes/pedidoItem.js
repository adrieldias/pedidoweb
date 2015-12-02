// app/routes/pedido_item.js
module.exports = function(app) {
	var controller = app.controllers.pedidoItem;
	app.route('/pedidoItens')
		.get(controller.listaPedidoItens)
		.post(controller.salvaPedidoItem);
	app.route('/pedidoItens/:id')
		.get(controller.obtemPedidoItem)
		.delete(controller.removePedidoItem);
};