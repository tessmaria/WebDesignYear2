angular.module('app')
.controller('PhoneController', ['$scope', '$http', function($scope, $http) {
	$scope.title = "Here is a list of phones";
	$scope.phones = undefined;
  	$scope.pictures = undefined;

  $http.get('../phones.json').then(function(phones){
    $scope.phones = phones.data;
  }).catch(function(error){
    debugger;
  }) 
}]);