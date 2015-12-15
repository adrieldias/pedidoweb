// public/js/controller/PedidosController.js

angular.module('pedidoweb').controller('PedidosController',
	function($scope, Pedido) {
		
		$scope.pedido = [];
		$scope.filtro = '';
		$scope.mensagem = {texto: ''};		
		
		function buscaPedidos() {
			Pedido.query(
				function(pedidos) {
					$scope.pedidos = pedidos;
					$scope.mensagem = {};
				},
				function(erro){					
					console.log(erro);
					$scope.mensagem = 
						{texto: "Não foi possível obter a lista de pedidos"};
				}
			)
		}
		buscaPedidos();
		
		$scope.remove = function(pedido) {
			Pedido.delete({id: pedido._id},
				buscaPedidos,				
				function(erro) {
					$scope.mensagem = {texto: 'Não foi possível remover o pedido'};
					console.log(erro);
				}
			);
		};
	});