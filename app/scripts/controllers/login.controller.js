'use strict';

angular.module('auth1App')
.controller('LoginCtrl', LoginCtrl);

function LoginCtrl ( ) {
    var vm = this;
    vm.login = 'login controller';
};