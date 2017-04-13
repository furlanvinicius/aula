app.controller('UsuarioListaCtrl',
 function($scope, UsuarioService, $state, $ionicUser) {

    alert($ionicUser.details.email);


    $scope.usuarios = UsuarioService.readAll();

    $scope.delete = function(id) {
        UsuarioService.delete(id);
    }

    $scope.update = function(id) {
        $state.go('usuario-update', {id: id});
    }

    $scope.showCreate = function(){
        $state.go('usuario-create');
    }


});

app.controller('UsuarioCreateCtrl',
    function ($scope, UsuarioService, $ionicHistory) {

        $scope.usuario = {
            id: null,
            name: '',
            email:'',
            password:''
        };
        
        $scope.salvar = function(usuario){
            UsuarioService.create(usuario);
            $ionicHistory.goBack(-1);
        }
});

app.controller('UsuarioUpdateCtrl',
    function ($scope, UsuarioService, $ionicHistory, $stateParams) {

        var id = $stateParams.id;

        $scope.usuario = UsuarioService.read(id);
        
        $scope.salvar = function(usuario){
            UsuarioService.update(usuario);
            $ionicHistory.goBack(-1);
        }
});

//controler de registro
app.controller('RegistroCtrl', function($scope, $ionicAuth) {

    $scope.salvar = function(usuario){
        $ionicAuth.signup(usuario).then(
            function(){
                alert('cadastrado');
            },
            function(error) {
                if (error.details[0] == "required_email") {
                    $ionicPopup.alert({
                        title: 'Falha no registro',
                        template: 'Preencha o email'
                    });
                } 
                console.log(error);
            }
        );
    }
});

app.controller('LoginCtrl', function($scope, $state, $ionicAuth, $ionicUser){

    if($ionicAuth.isAuthenticated()){
        $state.go('tabs.perfil');
    }

    $scope.login = function(usuario){
        
        $ionicAuth.login('basic', usuario).then(function(usuario){
            $ionicUser.set('data', new Date().toISOString());
            $ionicUser.save();

            $state.go('tabs.perfil');
        });
    }
});

app.controller('TabsCtrl', function($scope){


});

app.controller('PerfilCtrl', function($scope, $ionicUser){
    $scope.usuario = $ionicUser;

    $scope.salvar = function(usuario){
        $ionicUser = usuario;
        $ionicUser.save();
    }
    
});