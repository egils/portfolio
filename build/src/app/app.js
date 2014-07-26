var app = angular.module('egils.portfolio', [
    'templates-app',
    'templates-common',
    'egils.portfolio.home',
    'ui.router'
]);

app.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
}]);

app.run(function run() {

});

app.controller('AppController', ["$scope", "$location", function ($scope, $location) {
    $scope.$on('$stateChangeSuccess', function (event, toState) {
        if (angular.isDefined(toState.data.pageTitle)) {
            $scope.pageTitle = toState.data.pageTitle + ' | Egils portfolio';
        }
    });
}]);

