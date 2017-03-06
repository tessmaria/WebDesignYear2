angular.module('app').directive('blogInfo', function() {
	return {
		restrict: 'E',
		scope: {
			info: '='
		},
		templateUrl: '../js/directives/blogDirective.html',
		
	};
});