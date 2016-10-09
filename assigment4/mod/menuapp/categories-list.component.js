(function () {
	'use strict';

	angular.module('MenuApp')
		.component('categoriesList', {
			templateUrl: 'mod/menuapp/templates/categories-list.template.html',
			bindings: {
				items: '<'
			}
		});

})();
