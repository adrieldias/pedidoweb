// app/routes/pedido.js
module.exports = function(app) {
	var controller = app.controllers.pedido;
	app.route('/pedidos')
		.get(controller.listaPedidos)
		.post(controller.salvaPedido);
	app.route('/pedidos/:id')
		.get(controller.obtemPedido)
		.delete(controller.removePedido);
};