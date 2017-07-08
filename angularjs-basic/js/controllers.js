//Controllers

tvseriesApp.controller('homeController', ['$scope', '$location', 'tvseriesServiec', function($scope, $location, tvseriesServiec){
	$scope.series = tvseriesServiec.series;

	$scope.$watch('series', function(){
		tvseriesServiec.series = $scope.series;
	});
	
	$scope.submit = function(){
		$location.path('/tvseries');
	}
    
}]);



tvseriesApp.controller('tvseriesController', ['$scope', 'tvseriesServiec', 'getSeries', 'getFormatData', 'textTransformes', function($scope, tvseriesServiec, getSeries, getFormatData, textTransformes){
	var name= '';
	
	$scope.series = tvseriesServiec.series || localStorage.getItem('series');
	$scope.activeTab = 1;
	name = textTransformes.capitalize($scope.series);
		
	localStorage.setItem('series', name);
	$scope.tv_series_api_data = getSeries.getSeason(name);

	$scope.setActiveTab = function(index) {
		$scope.activeTab = index;
	}
   
}]);