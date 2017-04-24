'use strict';

angular.module('auth1App')
.controller('HomeCtrl', HomeCtrl);

function HomeCtrl ( ) {
    var vm = this;
    vm.main = 'main controller';
};