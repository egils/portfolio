var app = angular.module( 'egils.portfolio.about', [
    'ui.router'
]);

app.config(["$stateProvider", function ( $stateProvider ) {
    $stateProvider.state( 'root.about', {
        url: '/about',
        views: {
            "main@": {
                controller: 'AboutController',
                templateUrl: 'about/about.tpl.html'
            }
        },
        data:{ pageTitle: 'About' }
    });
}]);

app.controller( 'AboutController', ["$scope", function ( $scope ) {

}]);