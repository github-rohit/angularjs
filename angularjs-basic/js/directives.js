//DIRECTIVES

tvseriesApp.directive('tabNavPills', function(){
    return {
        restrict: 'E',
        templateUrl: 'directive/tabs.html',
        replace: true
    }
});

tvseriesApp.directive('seriesSeason', function(){
    return {
        restrict: 'E',
        templateUrl: 'directive/season.html',
        replace: true,
        scope: {
            seasonEpisodes: '='
        }
    }
});

tvseriesApp.directive('seriesEpisode', function(){
    return {
        restrict: 'E',
        templateUrl: 'directive/episode.html',
        replace: true,
        scope: {
            seasonEpisodeNumber: '@',
            seasonEpisodeName: '@'
        }
    }
});

tvseriesApp.directive('noRecord', function(){
    return {
        restrict: 'E',
        templateUrl: 'directive/norecord.html',
        replace: true,
        scope: {
            series: '='
        }
    }
});

tvseriesApp.directive('searchError', function(){
    return {
        restrict: 'E',
        templateUrl: 'directive/error.html',
        replace: true,
    }
});

