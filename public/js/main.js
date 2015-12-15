// public/js/main.js

angular.module('pedidoweb', ['ngRoute','ngResource'])
	.config(function($routeProvider) {
		$routeProvider.when('/contatos', {
			templateUrl: '/partials/contatos.html',
			controller: 'ContatosController'
		});
		$routeProvider.when('/contato/:contatoId', {
			templateUrl: '/partials/contato.html',
			controller: 'ContatoController'
		});
		$routeProvider.when('/contato', {
			templateUrl: '/partials/contato.html',
			controller: 'ContatoController'
		});
		$routeProvider.when('/pedidos', {
			templateUrl: '/partials/pedidos.html',
			controller: 'PedidosController'
		});
		$routeProvider.when('/pedido', {
			templateUrl: '/partials/pedido.html',
			controller: 'PedidoController'
		});
		
		$routeProvider.otherwise({redirectTo: '/contatos'});
	});