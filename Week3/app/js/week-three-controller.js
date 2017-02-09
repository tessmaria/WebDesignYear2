app.controller('ParentController', ['$scope', function($scope) {
	$scope.title = 'Parent Controller';
	$scope.description = 'This is inside of the parent controller';

	
}]);

app.controller('ChildCtrl', ['$scope', function($scope) {
	$scope.title = 'Child Controller Title';
}]);


app.controller('MainController', ['$scope', 'phones', function($scope, phones) {
	forecast.success(function(data) {
		$scope.manyPhones = data;
	});
}])