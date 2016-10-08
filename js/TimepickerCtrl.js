app.controller('TimepickerCtrl', ['$scope', function($scope) {
  $scope.mytime = new Date();
  $scope.setFormTime($scope.mytime);

  $scope.hstep = 1;
  $scope.mstep = 15;

  $scope.options = {
    hstep: [1, 2, 3],
    mstep: [1, 5, 10, 15, 25, 30]
  };

  $scope.ismeridian = true;
  $scope.toggleMode = function() {
    $scope.ismeridian = ! $scope.ismeridian;
  };

  $scope.update = function() {
    var d = new Date();
    d.setHours( 14 );
    d.setMinutes( 0 );
    $scope.mytime = d;
  };

  $scope.changed = function () {
    $scope.setFormTime($scope.mytime);
  };

  $scope.clear = function() {
    $scope.mytime = null;
  };
}]);
