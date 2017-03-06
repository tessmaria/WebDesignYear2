app.controller('ParentController', ['$scope', function($scope) {
	$scope.title = 'Parent Controller';
	$scope.description = 'This is inside of the parent controller';

	
}]);

app.controller('ChildCtrl', ['$scope', function($scope) {
	$scope.title = 'Child Controller Title';
}]);


