var app = angular.module('app',['ui.router'])
.config(function($stateProvider) {
  var helloState = {
    name: 'hello',
    url: '/hello',
    templateUrl: '../hello.html'
  }

  var aboutState = {
    name: 'about',
    url: '/about',
    templateUrl: '../about.html'
    }

  var contactState = {
    name: 'contact',
    url: '/contact',
    templateUrl: '../contact.html'
  }

    var blogState = {
      name: 'blog',
      url: '/blog',
      templateUrl: '../blog.html',
    }


  $stateProvider.state(helloState);
  $stateProvider.state(aboutState);
  $stateProvider.state(contactState);
  $stateProvider.state(blogState);
});