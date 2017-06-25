(function () {
'use strict';
    
    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);
    
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.numberOfItems = 0;
        $scope.lunchMessage = "";
        $scope.listofDishes = "";
        $scope.checkIfTooMuch = function () {       
          if ($scope.listofDishes == "") {
              $scope.messageColor = 'red';
              $scope.lunchMessage = "Please enter data first"
          } else {
              $scope.messageColor = 'green';
              var arrayOfDishes = $scope.listofDishes.split(',');
              var numOfDishes = 0;
              var i = 0;
              //calculate non-empty array elements
              for (i=0; i<arrayOfDishes.length; i++) {
                  arrayOfDishes[i] = arrayOfDishes[i].trim();
                  if (arrayOfDishes[i] != "") {
                      numOfDishes += 1;
                  } 
              }
              
              if (numOfDishes < 4) {
                  $scope.lunchMessage = "Enjoy!";
              } else {
                  $scope.lunchMessage = "Too Much!"
              }
          }    
        };
    }
})();
