// public/js/controllers/PedidoController
angular.module('pedidoweb').controller('PedidoController',
	function($scope, $routeParams, Pedido) {
		
		
		
		if($routeParams.pedidoId) {
			Pedido.get({id: $routeParams.PedidoId},
				function(pedido){
					$scope.pedido = pedido;
				},
				function(erro) {
					$scope.mensagem = {
						texto: 'Não foi possível obter o contato.'};
						console.log(erro);
				}
			)
		} else {
			$scope.pedido = new Pedido();
		}
		
		
			$scope.salva = function() {
			$scope.pedido.$save()
				.then(function(){
					$scope.mensagem = {texto: 'Salvo com sucesso.'};
					
					// limpa o formulário
					$scope.pedido = new Pedido();
					
				}).catch(function(erro) {
					$scope.mensagem = {texto: 'Não foi possível salvar'};
				});
				
		}
		
		Pedido.query(function(pedidos){
			$scope.pedidos = pedidos;
		});
	}
);	
