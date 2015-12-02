// app/routes/transportador.js
module.exports = function(app) {
	var controller = app.controllers.transportador;
	app.route('/transportadores')
		.get(controller.listaTransportadores);
		//.post(controller.salvaContato);
	app.route('/transportadores/:id')
		.get(controller.obtemTransportador);
		//.delete(controller.removeContato);
};