var app = angular.module('egils.portfolio', [
    'templates-app',
    'templates-common',
    'egils.portfolio.home',
    'egils.portfolio.about',
    'ui.router',
    'ngAnimate'
]);

app.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('root', {
            url: '',
            abstract: true,
            views: {
                "navigation@": {
                    templateUrl: 'navigation/navigation.tpl.html'
                }
            }
        });
}]);

app.run(function run() {

});

app.controller('AppController', ["$scope", function ($scope) {
    $scope.$on('$stateChangeSuccess', function (event, toState) {
        if (angular.isDefined(toState.data.pageTitle)) {
            $scope.pageTitle = toState.data.pageTitle + ' | Egils portfolio';
        }
    });
}]);

