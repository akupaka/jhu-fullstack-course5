(function () {
	'use strict';

	angular.module('MenuApp')
		.constant('MenuApiBasePath', "https://davids-restaurant.herokuapp.com")
		.service('CategoryItemsService', CategoryItemsService);


	CategoryItemsService.$inject = ['$http', 'MenuApiBasePath']
	function CategoryItemsService($http, MenuApiBasePath) {
		var service = this;
		service.getItems = function (categoryId) {
			//console.log("service.getItems fired: ", categoryId);
			return $http({
				method: "GET",
				url: (MenuApiBasePath + "/menu_items.json?category=" + categoryId)
			})
				.then(function (result) {
					//console.log("result is :", result.data.menu_items);
					return result.data.menu_items;
				})
				.catch(function (error) {
					console.log(error);
				});

		};
	};

})();
