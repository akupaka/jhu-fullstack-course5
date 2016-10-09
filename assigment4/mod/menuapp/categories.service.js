(function () {
	'use strict';

	angular.module('MenuApp')
		.constant('MenuApiBasePath', "https://davids-restaurant.herokuapp.com")
		.service('CategoriesService', CategoriesService);


	CategoriesService.$inject = ['$http', 'MenuApiBasePath']
	function CategoriesService($http, MenuApiBasePath) {
		var service = this;
		// Simulates call to server
		// Returns a promise, NOT items array directly
		service.getItems = function () {
			// console.log("service.getItems fired");
			return $http({
				method: "GET",
				url: (MenuApiBasePath + "/categories.json")
			})
				.then(function (result) {
					// process result and only keep items that match
					// console.log("result is :", result);
					return result.data;
				})
				.catch(function (error) {
					console.log(error);
				});

		};
	};

})();
