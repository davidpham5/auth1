'use strict';

angular.module('auth1App', [
	'ngRoute',
	'ngMessages'
])
.config( function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'HomeCtrl'
		})
		.when('/login', {
			templateUrl: 'views/login.html',
			controller: 'LoginCtrl'
		})
		.when('/signup', {
			template: 'views/signup.html',
			controller: 'SignupCtrl'
		})
		.when('/photo/:id', {
			template: 'views/detail.html',
			controller: 'DetailCtrl'
		})
		.otherwise('/');
});