angular.module('app')
 .controller('MyController', ["$scope", function($scope) {
 	$scope.title = "List of products!";
 	$scope.products = [
 		{
 			title: "Product 1",
 			name: "milk",
 			price: 2,
 			saleDate: new Date("2017", "01", "01")
 		},
 		{
 			title: "Product 2",
 			name: "bread",
 			price: 1.29,
 			saleDate: new Date("2017", "00", "27")
 		},
 		{
 			title: "Product 3",
 			name: "cheese",
 			price: 3.8,
 			saleDate: new Date("2016", "11", "31")
 		},
 	];
 }]);

