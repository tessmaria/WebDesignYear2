angular.module('app').controller('blogController', ['$scope',function($scope){
        $scope.items = 
          {
            title: "Blog 1",
            author: "Teresa Amass",
            post: "This is the information about blog 1"
          }
        /*  {
            title: "Blog 2",
            author: "Someone else",
            post: "Some more blog post info"
          }
        ];*/
    }]);