// app/routes/log.js
module.exports = function(app) {
	var controller = app.controllers.log;
	app.route('/logs')
		.get(controller.listaLogs)
		.post(controller.salvaLog);
	app.route('/logs/:id')
		.get(controller.obtemLog)
		.delete(controller.removeLog);
};