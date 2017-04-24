'use strict';

angular.module('auth1App', [
	'ngRoute',
	'ngMessages'
])
.config( function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'app/views/home.html',
			controller: 'HomeCtrl'
		})
		.when('/login', {
			templateUrl: 'app/views/login.html',
			controller: 'LoginCtrl'
		})
		.when('/signup', {
			template: 'app/views/signup.html',
			controller: 'SignupCtrl'
		})
		.when('/photo/:id', {
			template: 'app/views/detail.html',
			controller: 'DetailCtrl'
		})
		.otherwise('/');
});