app.controller('MainController', ['$scope', '$filter', function($scope, $filter) {
    $scope.formData = {
        name: '',
        location: '',
        date: {},
        time: '',
        choices: [{name: ''}]
    };
    $scope.jsonData = '';

    $scope.setFormDate = function (date) {
        $scope.formData.date = $filter('date')(date, "yyyy-MM-dd");
    };
    $scope.setFormTime = function (time) {
        $scope.formData.time = $filter('date')(time, "HH:mm");
    };

    $scope.deleteChoice = function (index) {
        $scope.formData.choices.splice(index, 1);
    };
    $scope.addChoice = function () {
        $scope.formData.choices.push({name: ''});
    };

    $scope.submit = function () {
        $scope.jsonData = JSON.stringify($scope.formData);
    };

}]);