// app/routes/cadastro.js
module.exports = function(app) {
	var controller = app.controllers.cadastro;
	app.route('/cadastros')
		.get(controller.listaCadastros);
		//.post(controller.salvaContato);
	app.route('/cadastros/:id')
		.get(controller.obtemCadastro);
		//.delete(controller.removeContato);
};