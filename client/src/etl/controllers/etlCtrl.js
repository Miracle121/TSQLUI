etl.controller('IndexController', function ($scope,$http) {

    $scope.columns = ['Id','Name', 'Created', 'LastRuntime', 'Actions'];

    (function init()
       {
        $http.get('http://192.168.0.110:2702/project')
            .success(function (data, status, headers, config) {
                $scope.ProjectList = data;

            })
            .error(function (data, status, headers, config) {
                console.error(data);
            });

    })();

});

