var app = angular.module("PassportApp", ["ngRoute"]);

app.config(function($routeProvider, $httpProvider) {
    console.log("app.js config");
    $routeProvider
      .when('/home', {
          templateUrl: 'views/home/home.html',
          controller: 'HomeCtrl'
      })
      .otherwise({
          redirectTo: '/home'
      });
});

app.controller("NavCtrl", function($scope, $http, $location, $rootScope){
    console.log("NAVCTRL");
    // $scope.logout = function(){
    //     $http.post("/logout")
    //     .success(function(){
    //         console.log("NAVCTRL POST LOGOUT");
    //         $scope.otherUser = null;
    //         $rootScope.currentUser = null;
    //         $location.url("/home");
    //     });
    // };
});