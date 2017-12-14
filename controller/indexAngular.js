var indexModulo = angular.module('indexModulo',[]).controller("indexController", function($scope) {
	$scope.mensagens = [
	    {codigo:1, nome:'Juan',email:'juan@gmail.com',fone:'(54) 3333-2212'},
		{codigo:2, nome:'Marcelo',email:'marcelo@outlook.com',fone:'(21) 98877-1245'}
	];

	$scope.selecionaMensagem = function(mensagemSelecionado) {
		$scope.mensagem = mensagemSelecionado;
	}

	$scope.limparCampos = function() {
		$scope.mensagem = "";
	}

	$scope.salvar = function() {
		if(typeof $scope.mensagem.email != 'undefined'){
			if(typeof $scope.mensagem.nome != 'undefined'){
				if(typeof $scope.mensagem.fone != 'undefined'){
					if($scope.mensagem.fone.length > 13 && $scope.mensagem.fone.length < 16){
						scope.mensagem.codigo = $scope.mensagens.length + 1;
						$scope.mensagens.push($scope.mensagem);
						$scope.limparCampos();
					}else{
						alert("Por favor, coloque um telefone valido! ");
						console.log("Por favor, coloque telefone valido!");
					}
				}else{
					alert("Por favor, coloque um telefone valido! ");
					console.log("Por favor, coloque telefone valido!");
				}
			}else{
				alert("Por favor, coloque um nome!");
                console.log("Por favor, coloque um nome!");
			}
		}else{
			alert("Por favor, coloque um email válido!");
            console.log("Por favor, coloque um email válido!");
		}
	}

	$scope.excluir = function() {
		$scope.mensagens.splice($scope.mensagens.indexOf($scope.mensagem),1);
	    $scope.limparCampos();
	}
});