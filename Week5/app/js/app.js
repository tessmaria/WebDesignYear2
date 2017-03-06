var app = angular.module('app',['ui.router'])
.config(function($stateProvider) {
  var helloState = {
    name: 'hello',
    url: '/hello.html',
    templateUrl: '../hello.html'
  }

  var aboutState = {
    name: 'about',
    url: '/about.html',
    templateUrl: '../about.html'
    }

  var contactState = {
    name: 'contact',
    url: '/contact.html',
    templateUrl: '../contact.html',
    controller: 'contactController'
  }

  var blogState = {
    name: 'blog',
    url: '/blog.html',
    templateUrl: '../blog.html',
    controller: 'blogController'
  }


  $stateProvider.state(helloState);
  $stateProvider.state(aboutState);
  $stateProvider.state(contactState);
  $stateProvider.state(blogState);
});



angular.module('app').controller('blogController', ['$scope',function($scope){
        $scope.items = [
          {
            title: "Blog 1",
            author: "By Teresa Amass",
            post: "This is the first blog post for this exercise"
          },
          {
            title: "Blog 2",
            author: "By Teresa Amass",
            post: "This is another blog post"
          },
          {
            title: "Blog 3",
            author: "By Teresa Amass",
            post: "This blog post is about how hard angular is :)"
          }
        ];
    }]);



angular.module('app').controller('contactController', ['$scope', function($scope) {
  $scope.inputText= "";
  $scope.contactForm = {
    firstName: "First Name:",
    secondName: "Second Name:",
    email: "Email Address:"
  }
}])