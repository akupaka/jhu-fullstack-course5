(function () {
	'use strict';

	angular.module('MenuApp')
		.component('itemList', {
			templateUrl: 'mod/menuapp/templates/items-list.template.html',
			bindings: {
				items: '<'
			}
		});

})();
