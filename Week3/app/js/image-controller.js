angular.module('app')
.controller('ImageController', ["$scope", "$http", function($scope, $http) {
	$scope.title = "Pixabay Images";
	$http.get('https://pixabay.com/api/?key=4745151-bcf7b0141175f6a3a8bf365b1&q=blue+flowers&image_type=photo')
    .then(function(pictures){
      $scope.pictures = pictures.data.hits;
    })
    .catch(function(error){
       debugger;
    });
}]);