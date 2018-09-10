angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.selectedEntry = undefined;
    $scope.newEntry = undefined;
    
    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
        var entry = angular.copy($scope.newEntry);
        $scope.listings.push(entry);
        $scope.newEntry = {};
        $scope.entryForm.$setPristine();
        $scope.listings.sort(function(a, b ){
          return a.code.localeCompare(b.code);
        });
    };


    $scope.deleteListing = function(index) {
      $scope.listings.splice(index, 1);
    };


    $scope.showDetails = function(index) {
      $scope.selectedEntry = $scope.listings[index];
    };
  }
]);