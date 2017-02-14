app.controller('MainController', ["$scope", function($scope) {
	$scope.blogItems = [
		{
			title: "Blog 1",
			author: "Teresa Amass",
			topic: "Angular"
		},
		{
			title: "Blog 2",
			author: "Another Person",
			topic: "Some thing"
		}
	];
}]);