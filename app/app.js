'use strict';

angular.module('auth1App', [
	'ngRoute',
	'ngMessages',
	'satellizer'
])
.config( function($routeProvider, $authProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'app/views/home.html',
			controller: 'HomeCtrl',
			controllerAs: 'home'
		})
		.when('/login', {
			templateUrl: 'app/views/login.html',
			controller: 'LoginCtrl',
			controllerAs: 'login'
		})
		.when('/signup', {
			template: 'app/views/signup.html',
			controller: 'SignupCtrl',
			controllerAs: 'signup'
		})
		.when('/photo/:id', {
			template: 'app/views/detail.html',
			controller: 'DetailCtrl',
			controllerAs: 'detail'
		})
		.otherwise('/');


	$authProvider.loginUrl = 'http://localhost:8000/auth/login';
	$authProvider.signupUrl = 'http://localhost:8000/auth/signup';
	$authProvider.oauth2({
	  name: 'instagram',
	  url: 'http://localhost:8000/auth/instagram',
	  redirectUri: 'http://localhost:8000',
	  clientId: '104f6b9fb5614cf3b2d218eb4dfb4450',
	  requiredUrlParams: ['scope'],
	  scope: ['likes'],
	  scopeDelimiter: '+',
	  authorizationEndpoint: 'https://api.instagram.com/oauth/authorize'
	});
});