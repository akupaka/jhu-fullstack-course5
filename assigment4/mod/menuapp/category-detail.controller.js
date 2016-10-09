(function () {
	'use strict';

	angular.module('MenuApp')
		.controller('CategoryDetailController', CategoryDetailController);


	CategoryDetailController.$inject = ['$stateParams', 'items'];
	function CategoryDetailController($stateParams, items) {
		var categoryDetail = this;
		var item = items[$stateParams.itemId];
		categoryDetail.id = item.id;
		categoryDetail.name = item.name;
		categoryDetail.short_name = item.short_name;
		categoryDetail.special_instructions = item.special_instructions;
	};

})();
