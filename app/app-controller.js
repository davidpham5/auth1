'use strcit';

angular.module('auth1App').controller('AppCtrl', AppCtrl);

function AppCtrl ($scope) {
    var vm = this;
    vm.hi = 'hello world';
    vm.logout = function() {
        return console.log('hello world')
    }
};