var app = angular.module('BruneiJobs', []);

app.controller('MainController', ['$scope', 'jobs',  function($scope, jobs) {
	jobs.success(function(data){
		$scope.jobslist = data.results;
	});
}]);

app.factory('jobs', ['$http', function($http) {
	return $http.get('https://api.import.io/store/data/76669367-4de5-47e8-b8a6-e0602b0cc20d/_query?input/webpage/url=http%3A%2F%2Fwww.brujobs.com.bn%2F&_user=e5ea31c3-7d58-4a1c-abed-a100117ebd6b&_apikey=e5ea31c37d584a1cabeda100117ebd6bbfe0161f21296db97a3cbc0b4fcc0561308ad4bd697dd569367d8324e93c49d8980fe84f69a4064a7c6d22a3b18883130d2d4f3df9355d8fa227334190a7ecf6')
	.success(function(data){
		return data;
	})
	.error(function(err){
		return err;
	});
}]);