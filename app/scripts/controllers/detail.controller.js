'use strict';

angular.module('auth1App')
.controller('DetailCtrl', DetailCtrl);

function DetailCtrl ( ) {
    var vm = this;
    vm.detail = 'detail controller';
};