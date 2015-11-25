// app/routes/vendedor.js
module.exports = function(app) {
	var controller = app.controllers.vendedor;
	app.route('/vendedores')
		.get(controller.listaVendedores);
		//.post(controller.salvaContato);
	app.route('/vendedores/:id')
		.get(controller.obtemVendedor);
		//.delete(controller.removeContato);
};