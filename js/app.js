var myApp=angular.module('JSON2SQL',[])
.controller('JSON2SQLController', function($scope,$http){
	$scope.message="Hello";
	$http.get('wordList.json').success(function(data){
		$scope.data=data;
	});
});