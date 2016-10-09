(function () {
	'use strict';

	angular.module('MenuApp')
		.controller('CategoryItemsController', CategoryItemsController);

	CategoryItemsController.$inject = ['CategoryItemsService', 'items'];
	function CategoryItemsController(CategoryItemsService, items) {
		var categoryItems = this;
		categoryItems.items = items;
	};

})();
