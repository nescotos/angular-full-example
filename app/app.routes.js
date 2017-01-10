app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'app/partials/home.html',
            controller: 'indexCtrl',
            controllerAs: 'index'
        })
        .state('other', { //Sstate name
          url: '/other',
          templateUrl: 'app/partials/other.html',
          controller: 'otherCtrl',
          controllerAs: 'other'
        })
        .state('nested', {
          url: '/nested',
          abstract: true,
          templateUrl: 'app/partials/nested.html'
        })
        .state('nested.view1', {
          url: '',
          // abstract: 'default',
          templateUrl: 'app/partials/view1.html'
        })
        .state('nested.view2', {
          url: '/view2',
          templateUrl: 'app/partials/view2.html'
        })
        .state('nested2', {
          url: '/nested2',
          templateUrl: 'app/partials/nested2.html'
        })
        .state('nested2.view1', {
          url: '/view1',
          templateUrl: 'app/partials/view1.html'
        })
        .state('nested2.view2', {
          url: '/view2',
          templateUrl: 'app/partials/view2.html'
        })

});
