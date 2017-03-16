var app = angular.module('WhatsApp', ['ionic']);


app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

app.config(function($stateProvider, $urlRouterProvider){
  $stateProvider.state('usuario-lista', {
    url: '/usuario-lista',
    templateUrl: 'templates/usuario-lista.html',
    controller: 'UsuarioListaCtrl'
  });

  $stateProvider.state('usuario-create', {
    url: '/usuario-create',
    templateUrl: 'templates/usuario-create.html',
    controller: 'UsuarioCreateCtrl'
  });

  $stateProvider.state('usuario-update', {
    url: '/usuario-update/:id',
    templateUrl: 'templates/usuario-update.html',
    controller: 'UsuarioUpdateCtrl'
  });

  $urlRouterProvider.otherwise('/usuario-lista')
});

