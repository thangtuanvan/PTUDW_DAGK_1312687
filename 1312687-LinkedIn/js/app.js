var app = angular.module("myLinkedInApplication", []);

app.controller("myLinkedInController", ["$scope", "$http", function($scope, $http) {
	
	var url = "https://api.myjson.com/bins/2p5n6";
	$http.get(url)
		.success(function(data) {
		     //Read model from json data
            $scope.coverPicture = data.coverPicture;
            $scope.profilePicture = data.profilePicture;
            $scope.name = data.name;
            $scope.headline = data.headline;
            $scope.nation = data.nation;
			
            $scope.isInfluencer = data.isInfluencer;
            $scope.followers = data.followers;
            $scope.profileUrl = data.profileUrl;
            
            $scope.postsUrl = data.postsUrl;
            $scope.posts = data.posts;
            
            $scope.summary = data.summary;
            
            $scope.experience = data.experience;
            
            $scope.caredCauses = data.caredCauses;
            
            $scope.supportedOrganizations = data.supportedOrganizations;
            
            $scope.skills = data.skills;
            
            $scope.education = data.education;
		});
}]);