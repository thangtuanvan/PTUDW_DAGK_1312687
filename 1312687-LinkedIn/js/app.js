var app = angular.module("myLinkedInApplication", []);

app.controller("myLinkedInController", ["$scope", "$http", function($scope, $http) {
	
	var url = "https://api.myjson.com/bins/4y72y";
	$http.get(url)
		.success(function(data) {
			// đọc phần 1
            $scope.coverPicture = data.coverPicture;
            $scope.profilePicture = data.profilePicture;
            $scope.name = data.name;
            $scope.headline = data.headline;
            $scope.nation = data.nation;
			
			$scope.contact = data.contact;
            $scope.profileUrl = data.profileUrl;
                   

			// đọc phần 2
            $scope.summary = data.summary;
            
            $scope.experience = data.experience;         
            
			$scope.projects = data.projects;
			
            $scope.skills = data.skills;
            
            $scope.education = data.education;
		});
}]);