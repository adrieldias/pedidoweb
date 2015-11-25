// app/routes/contato.js
module.exports = function(app) {
	var controller = app.controllers.prazoVencimento;
	app.route('/prazosVencimento')
		.get(controller.listaPrazosVencimento);
		//.post(controller.salvaContato);
	app.route('/prazosVencimento/:id')
		.get(controller.obtemPrazoVencimento);
		//.delete(controller.removeContato);
};