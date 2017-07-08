var tvseriesApp = angular.module('tvseriesApp', ['ngRoute', 'ngResource', 'ngSanitize']);
tvseriesApp.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);