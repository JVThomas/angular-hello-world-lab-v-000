function MainController($scope){
  $scope.name = "Sparticus";
  $scope.email = "N/A";
  $scope.phone = "N/A";
}

angular
  .module('app')
  .controller('MainController',MainController);