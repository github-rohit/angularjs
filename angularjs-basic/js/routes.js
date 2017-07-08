//ROUTES
tvseriesApp.config(['$routeProvider', '$locationProvider', '$sceDelegateProvider', function($routeProvider, $locationProvider, $sceDelegateProvider){
    $locationProvider.hashPrefix('');
    
    $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        'http://imdbapi*.poromenos.org/**js**'
    ]);
    
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'homeController'
        })
        .when('/tvseries', {
            templateUrl: 'pages/tvseries.html',
            controller: 'tvseriesController'
        });
}]);