var app = angular.module( 'egils.portfolio.home', [
    'ui.router'
]);

app.config(["$stateProvider", function ( $stateProvider ) {
    $stateProvider.state( 'root.home', {
        url: '/',
        views: {
            "main@": {
                controller: 'HomeController',
                templateUrl: 'home/home.tpl.html'
            }
        },
        data:{ pageTitle: 'Home' }
    });
}]);

app.controller( 'HomeController', ["$scope", function ( $scope ) {

}]);