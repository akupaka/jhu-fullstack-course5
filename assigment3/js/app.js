(function () {
	'use strict';

	angular.module('NarrowItDownApp', [])
		.controller('NarrowItDownController', NarrowItDownController)
		.service('MenuSearchService', MenuSearchService)
		.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
		.directive('foundItems', FoundItems);

	function FoundItems() {
		var ddo = {
			restrict: "E",
			templateUrl: 'foundItems.html',
			//controller: ...,
			//controllerAs: '...',
			//bindToController: true,
			scope: {
				foundItems: '<',
				onRemove: '&'
			}
		};
		return ddo;
	};

	NarrowItDownController.$inject = ['MenuSearchService'];
	function NarrowItDownController(MenuSearchService) {
		var ctrl = this;
		ctrl.searchTerm = "";
		ctrl.found;

		ctrl.narrowItDown = function () {
			if (ctrl.searchTerm) {
				MenuSearchService.getMatchedMenuItems(ctrl.searchTerm)
				.then(function (result) {
					ctrl.found = result;
					console.log("ctrl.found is:", ctrl.found);
				})
				.catch(function (error) {
					console.log(error);
				});
			} else {
				ctrl.found = [];
			};
		};

		ctrl.removeItem = function (index) {
			console.log("Remove item: ", index);
			ctrl.found.splice(index, 1);
		};
	};

	MenuSearchService.$inject = ['$http', 'ApiBasePath'];
	function MenuSearchService($http, ApiBasePath) {
		var service = this;

		service.getMatchedMenuItems = function (searchTerm) {
			//console.log(searchTerm);

			return $http({
				method: "GET",
				url: (ApiBasePath + "/menu_items.json")
			})
			.then(function (result) {
				// process result and only keep items that match
				//console.log("result is :", result);
				var allItems = result.data;
				var foundItems = [];
				if (allItems.menu_items) {
					for (var i = 0; i < allItems.menu_items.length; i++) {
						//console.log("checking item: ", allItems.menu_items[i]);
						if (allItems.menu_items[i].description.indexOf(searchTerm) > -1) {
							//console.log("check result: ", allItems.menu_items[i].description);
							foundItems.push(allItems.menu_items[i]);
						};
					};
				};
				//console.log("foundItems is: ", foundItems);

				// return processed items
				return foundItems;
			})
			.catch(function (error) {
				console.log(error);
			});
		};
	};
})();