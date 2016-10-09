(function () {
	'use strict';

	angular.module('MenuApp')
		.controller('CategoriesController', CategoriesController);


	CategoriesController.$inject = ['CategoriesService', 'items'];
	function CategoriesController(CategoriesService, items) {
		var categories = this;
		categories.items = items;
	};

})();
