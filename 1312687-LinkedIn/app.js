var app = angular.module("myLinkedInApplication", []);

app.controller("myLinkedInController", ["$scope", "$http", function($scope, $http) {
	
	$scope.myData = "Load";
	$http.get('../data.json')
		.success(function(data) {
			$scope.myData = "Hello";
		}).error(function (data){
            $scope.myData = "Error";
        });
}]);