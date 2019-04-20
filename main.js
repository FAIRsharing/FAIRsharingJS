(function() {

    let my_app = angular.module('angularSeedApp',
        [
            'ngRoute',
            'ngMaterial',
            'ngAria',
            'ngAnimate',
            'ngMessages',
            'chart.js',
            'appConfigCtrl',
        ])
        .config(function ($mdThemingProvider) {
            $mdThemingProvider.theme('docs-dark', 'default')
                .primaryPalette('yellow')
        });


    /* *************************************************************************************************** */
    /* ROUTING */

    my_app.config(function($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl : "scripts/views/home.html",
            })
            .when("/view1", {
                templateUrl : "scripts/views/view1.html",
                controller: "configCtrl"
            })
            .when("/view2", {
                templateUrl : "scripts/views/view2.html",
                controller: "configCtrl"
            });
    });

    /* *************************************************************************************************** */
    /* FILTERS */

    my_app.filter('removeUnderscore', function() {
        return function (str) {
            return str.replace(/_/g, ' ')
        };
    });

    /* *************************************************************************************************** */
    /* DIRECTIVES */


    /* Directive */
    my_app.directive('inputData', function(){
        return{
            restrict: 'A',
            templateUrl: 'scripts/directives/directive.html',
            scope: {
                inputData: '=',
            },
            link: function($scope){
                $scope.$watch('inputData', function(inputData){
                    if(inputData)
                        $scope.content_output = $scope.inputData;
                });
            }
        }
    });


})();