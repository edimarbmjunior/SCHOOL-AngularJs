var loginAlunoModulo = angular.module('loginAlunoModulo',[]).controller("loginAlunoController", function($scope) {

	$scope.logins = [
	    {nomeEmail:'edimar@gmail.com', senha:'123'},
		{nomeEmail:'edimar', senha:'321'}
	];
	$scope.selecionaLogin = function(mensagemLogin) {
		$scope.login = mensagemLogin;
	}

	$scope.limparCampos = function() {
		$scope.login = "";
	}

	$scope.salvar = function() {
		if(typeof $scope.login.nomeEmail != 'undefined'){
			if(typeof $scope.login.senha != 'undefined'){
				alert("Acesso garantido! ");
                window.location.href = "index.html";
			}else{
				alert("Por favor, coloque uma senha válida! ");
				console.log("Por favor, coloque uma senha válida!");
			}
		}else{
			alert("Por favor, coloque um nome ou e-mail válido!");
            console.log("Por favor, coloque um nome ou e-mail válido!");
		}
	}

	$scope.excluir = function() {
		$scope.logins.splice($scope.logins.indexOf($scope.login),1);
	    $scope.limparCampos();
	}
});