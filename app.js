var myapp = angular.module('myapp', ['ui.bootstrap']);

myapp.controller("MainController", ['$scope', function($scope) {

  $scope.master = {};

  $scope.reset = function() {
    $scope.details = angular.copy($scope.master);
  };

  $scope.reset();

  $scope.records = [];

  $scope.update = function(record) {
	  var myRecord = angular.copy(record);
    $scope.master = angular.copy(record);
    $scope.records.push(myRecord);
    $scope.details = "";
    $scope.myForm.$setPristine();
    console.log($scope.records);
  };

  $scope.isOpened = false;

  $scope.dateOptions = {
      dateDisabled: false,
      formatYear: 'yy',
      maxDate: new Date(),
      minDate: new Date(1900, 1, 1),
      startingDay: 1
  };

  $scope.open = function() {
      $scope.isOpened = true;
  };

  $scope.edit = function(record) {
      $scope.details = angular.copy(record);
      var index = $scope.records.indexOf(record);
      $scope.records.splice(index, 1);
  };

  $scope.delete = function(record) {
      var index = $scope.records.indexOf(record);
      $scope.records.splice(index, 1);
  };


}]);

//-------------------------------------------------------------------------------------

myapp.controller("DataController",function($scope, $http){


  $http.get('data.html').success(function(data){

    $scope.data = data;
    console.log($scope.data);

  });
});

//--------------------------------------------------------------------------------------

myapp.filter('ageFilter', function() {
     function calculateAge(birthday) {
         var ageDifMs = Date.now() - birthday.getTime();
         var ageDate = new Date(ageDifMs);
         return Math.abs(ageDate.getUTCFullYear() - 1970);
     }

     return function(birthdate) {
           return calculateAge(birthdate);
     };
});
