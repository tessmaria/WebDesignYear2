angular.module('app')
 .controller('FormController', ["$scope", function($scope) {
 	$scope.name = "This is the form";
 	$scope.formInput="";
 }])