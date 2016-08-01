angular.module('myapp')

.controller('aboutCtrl', function($scope, aboutService) {
  
  $scope.message = 'About';

  $scope.generateRandom = aboutService.generate();
  $scope.datefun = aboutService.dd();
  $scope.monthfun = aboutService.mm();
  $scope.dtfun = aboutService.dt();
  $scope.numrev = aboutService.rev();

  console.log("test", $scope.generateRandom);
  console.log("test", $scope.datefun);
  console.log("test", $scope.monthfun);
  console.log("test", $scope.dtfun);
  console.log("test", $scope.numrev);
  
});

