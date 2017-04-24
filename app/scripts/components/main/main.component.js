'use strict';

function MainComponentCtrl ($window, $rootScope, $auth) {
	var vm = this;
	vm.$onInit = function () {
		console.log(vm)
	};
	vm.isAuthenticated = function() {
		return $auth.isAuthenticated();
	};

	vm.linkToInstagrame = function() {
		$auth.link('instagram')
			.then(function(resp) {
				console.log(resp);
			})
	};
};

angular.module('auth1App').component('mainComponent', {
	templateUrl: 'app/views/main.html',
	controller: MainComponentCtrl,
	bindings: {
		main: '='
	}
})