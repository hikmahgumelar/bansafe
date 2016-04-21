// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])
 
  .controller("Ambildata", function ($scope, $http) {
  $scope.formdata = {};
    $scope.proses = function() {  

    $http.get('/api/keretaapi?origination='+$scope.formdata.asal+'&destination=BD&tanggal=20160423&apikey=TzW9lTM0RBsm2AgnL2M3AZgCZCcwz5hx_1412403086').success(function (data) {
$scope.events = data;

     });
    };
             

});
