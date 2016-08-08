angular
  .module('app', [
    'ui.router'
  ])
  .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home.html'
      })
      .state('notHome', {
        url: '/notHome',
        templateUrl: 'notHome.html'
      })
  }])
