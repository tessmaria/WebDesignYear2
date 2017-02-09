app.factory('phones', ['$http', function($http) {
	return $http.get('file:///C:/Users/Teresa/Documents/WebDesignYear2/Week3/app/js/phones.json')
	.success(function(data) {
		return data;
	})
	.error(function(err) {
		return err;
	});
}]);