angular.module('appConfigCtrl', []).controller(
    'configCtrl',
    [
        '$scope',
        '$http',
        "$sce",
        function($scope, $http, $sce) {
            let endpoint = "https://jsonplaceholder.typicode.com/todos/1";
            $scope.title = "FAIRSharing.org";
            $scope.description = $sce.trustAsHtml(
                "A curated, informative and educational resource on data and metadata " +
                "<i>standards</i>, inter-related to <i>databases</i> and data <i>policies</i>."
            );
            $scope.sub_description = "We guide consumers to discover, select and use these resources with confidence, and producers to make their resource more discoverable, more widely adopted and cited.";
            $scope.data = {};

            $scope.request = {
                method: 'GET',
                url: endpoint,
                headers: {
                    'Accept': "application/json",
                },
                data: null,
                //timeout: 2000
            };

            $scope.executeCall = function(){
                try{
                    $http($scope.request).then(function(response){
                        $scope.data = response.data;
                    }, function(error){
                        $scope.data = {
                            message: "There is an error with your request, see below",
                            error: error,
                            request: $scope.request
                        };
                    })
                }
                catch (e){
                    $scope.data = {
                        message: "There is an error with your request, see below",
                        error: e,
                        request: $scope.request
                    };
                }

            };

            $scope.executeCall();
        }
    ]
);