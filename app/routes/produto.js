 //app/routes/produto.js
module.exports = function(app) {
	var controller = app.controllers.produto;
	app.route('/produtos')
		.get(controller.listaProdutos);
	//	.post(controller.salvaContato);
	app.route('/produto/:id')
		.get(controller.obtemProduto);
		//.delete(controller.removeContato);
};