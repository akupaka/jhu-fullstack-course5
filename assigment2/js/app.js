(function () {
	'use strict';

	angular.module('ShoppingListCheckOff', [])
		.controller('ToBuyShoppingController', ToBuyShoppingController)
		.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
		.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

	ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyShoppingController(ShoppingListCheckOffService) {
		var ctrlBuy = this;
		ctrlBuy.items = ShoppingListCheckOffService.getItemsToBuy();

		ctrlBuy.buyItem = function (index) {
			ShoppingListCheckOffService.buyItem(index);
		};
	};

	AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
		var ctrlBought = this;
		ctrlBought.items = ShoppingListCheckOffService.getItemsBought();
	};

	function ShoppingListCheckOffService() {
		var service = this;
		var itemsToBuy = [
			{
				name: "cookies (required!)",
				quantity: 10,
				units: "pack(s)"
			},
			{
				name: "milk",
				quantity: 2,
				units: "bottle(s)"
			},
			{
				name: "chocolate",
				quantity: 5,
				units: "bar(s)"
			},
			{
				name: "tea",
				quantity: 1,
				units: "pack(s)"
			},
			{
				name: "orange juice",
				quantity: 2,
				units: "bottle(s)"
			},
			{
				name: "chips",
				quantity: 3,
				units: "pack(s)"
			},
		];
		var itemsBought = [];

		service.getItemsToBuy = function () {
			return itemsToBuy;
		};

		service.getItemsBought = function () {
			return itemsBought;
		};

		service.buyItem = function (index) {
			var bougthItem = itemsToBuy.splice(index, 1)[0];
			itemsBought.push(bougthItem);
		};
	};
})();