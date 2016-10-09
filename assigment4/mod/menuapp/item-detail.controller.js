(function () {
	'use strict';

	angular.module('MenuApp')
		.controller('ItemDetailController', ItemDetailController);


	ItemDetailController.$inject = ['$stateParams', 'items'];
	function ItemDetailController($stateParams, items) {
		var itemDetail = this;
		var item = items[$stateParams.itemId];
		itemDetail.id = item.id;
		itemDetail.name = item.name;
		itemDetail.short_name = item.short_name;
		itemDetail.description = item.description;
		itemDetail.price_small = item.price_small;
		itemDetail.price_large = item.price_large;
		itemDetail.small_portion_name = item.small_portion_name;
		itemDetail.large_portion_name = item.large_portion_name;
	};

})();
