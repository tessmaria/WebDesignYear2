angular.module('app')
  .controller('SampleController', ['$scope', function ($scope) {
    $scope.title = 'The title in the first controller';

    $scope.books = [
      {
        name: 'Name of the wind',
        cost: 200
      },
      {
        name: 'Face of the wind',
        cost: 300
      },
      {
        name: 'Arm of the wind',
        cost: 100
      },

    ];

    $scope.cart = [];

    $scope.addToCart = function (book) {
      $scope.cart.push(book);
    }

    $scope.total = function() {

     var totalValue = $scope.cart.reduce(function (previous, current) {
        return previous + current.cost;
      }, 0);

      return totalValue;
    }
  }]);