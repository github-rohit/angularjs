//SERVICES

tvseriesApp.service('tvseriesServiec', function(){
    this.series = 'Justice League';
    //Justice League
});

tvseriesApp.service('textTransformes', function(){
    
	this.capitalize = function(str) {

		if (str) {
			str = str.split(' ');
			str = str.map(function(input){
					return input.charAt(0).toUpperCase() + input.substr(1);
			})
			str = str.join(' ')
		}

		return str || '';
	}
    
});

tvseriesApp.service('getSeries', ['$resource', 'getFormatData', function($resource, getFormatData){
    
    var tvSeriesApi = $resource('http://imdbapi.poromenos.org/js/?', {
        jsonCallbackParam: 'callback'
    },{
        get: {
            method: 'JSONP'
        }
    });
    
		
    this.getSeason = function (name){		
				
        var user = tvSeriesApi.get({name: name}, function(data) {
					user.series = getFormatData.getSeason(data, name);
				}, function(data, sk ) {
					console.log(data)
					console.log(sk)
					user.series = {};
					user.series.error = true;
				});
				
				return user;
    };
    
}]);

tvseriesApp.service('getFormatData', ['$resource', 'textTransformes', function($resource, textTransformes){
		
	this.getSeason = function (data, name){
		var arranged_data = {};

		if (data.$resolved) {
			var series = data[name];

			if (series) {
					arranged_data.episodes = formatSeriesData(series.episodes);
					arranged_data.year = series.year;
			} else {
				arranged_data.norecord = true;
			}
		} else {
			arranged_data.error = true;
		}

		return arranged_data;
	};
		
    var formatSeriesData = function(episodes){
        var episodes_obj = {};
        
        angular.forEach(episodes, function(obj, key){
            
            if (!episodes_obj[obj.season]) {
                episodes_obj[obj.season] = []
            } 
            
            episodes_obj[obj.season][obj.number] = {
                name: obj.name,
                number: parseInt(obj.number)
            };
            
        });
        
        return episodes_obj;
    };
}]);