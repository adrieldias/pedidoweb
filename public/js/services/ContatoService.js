// public/js/services/ContatoService.js

angular.module('pedidoweb').factory('Contato',
	function($resource) {
		return $resource('/contatos/:id');
	});