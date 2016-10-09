(function () {
	'use strict';

	angular.module('MenuApp')
		.config(RoutesConfig);

	RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	function RoutesConfig($stateProvider, $urlRouterProvider) {

		// Redirect to home page if no other URL matches
		$urlRouterProvider.otherwise('/');

		// *** Set up UI states ***
		$stateProvider

			// Home page
			.state('home', {
				url: '/',
				templateUrl: 'mod/menuapp/templates/home.template.html'
			})

			// Premade list page
			.state('categories', {
				url: '/categories',
				templateUrl: 'mod/menuapp/templates/categories.template.html',
				controller: 'CategoriesController as categories',
				resolve: {
					items: ['CategoriesService', function (CategoriesService) {
						// console.log("CategoriesService.getItems to be fired");
						return CategoriesService.getItems();
					}]
				}
			})

			/* //not used in this version
			.state('categories.categoryDetail', {
				url: '/category-detail/{itemId}',
				templateUrl: 'mod/menuapp/templates/category-detail.template.html',
				controller: "CategoryDetailController as categoryDetail"
			})*/
			
			.state('items', {
				url: '/items/{categoryId}',
				templateUrl: 'mod/menuapp/templates/category-items.template.html',
				controller: "CategoryItemsController as categoryItems",
				resolve: {
					items: ['CategoryItemsService', '$stateParams', function (CategoryItemsService, $stateParams) {
						//console.log("CategoryItemsService.getItems to be fired: ", $stateParams, $stateParams.categoryId);
						return CategoryItemsService.getItems($stateParams.categoryId);
					}]
				}
			});

	}

})();
