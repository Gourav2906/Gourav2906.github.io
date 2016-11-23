 var myApp= angular.module('BlankApp', ['ngMaterial' ,'ngRoute','jkAngularCarousel']);

  myApp.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "./views/home.html"
    })
    .when("/products", {
        templateUrl : "./views/products.html",
    })
  });


    myApp.controller('MyCtrl', function($scope) {
    $scope.dataArray = [
      {
        // src: 'http://www.parasholidays.in/blog/wp-content/uploads/2014/05/holiday-tour-packages-for-usa.jpg'
        src:'pic1.jpg'
      },
      {
        src: 'pic2.jpg'
      },
      {
        src: 'pic3.jpg'
      },
      {
        src: 'pic4.jpg'
      },
      {
        src: 'pic5.jpg'
      },
      {
        src: 'pic6.jpg'
      },
    ];
});
    
myApp.controller('toolbarCtrl', function($scope,$location) {

        $scope.goto = function (val) {
        $location.path(val);
    };
       $scope.currentNavItem = "home";
    });