(function () {
	'use strict';

	angular.module('LunchCheck', [])
		.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];
	function LunchCheckController($scope) {
		$scope.list = "";
		$scope.message = "";
		$scope.checkStatus = "ok";

		$scope.check = function () {
			if ($scope.list) {
				var listA = $scope.list.split(",").filter(function (elem) {
					return (elem.trim() != "");
				});
				console.log(listA);
				if (listA.length <= 3) {
					$scope.message = "Enjoy!";
				} else {
					$scope.message = "Too much!";
				};
				$scope.checkStatus = "ok";
			} else {
				$scope.message = "Please enter data first";
				$scope.checkStatus = "warning";
			};
		};
	};
})();