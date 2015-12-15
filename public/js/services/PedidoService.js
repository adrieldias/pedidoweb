// public/js/services/PedidoService.js

angular.module('pedidoweb').factory('Pedido',
	function($resource) {
		return $resource('/pedidos/:id');
	});