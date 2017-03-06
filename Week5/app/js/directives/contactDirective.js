angular.module('app').directive('formInfo', function() {
	return {
		restrict: 'E',
		scope: {
			form: '='
		},
		templateUrl: '../js/directives/contactDirective.html',
		
	};
});