angular.module("etl.newProject", []).controller('configuration', ['$http', '$scope', '$q', function ($http, $scope, $q) {
    $scope.Configutation = {};
    (function init() {
        //timezone
        $http.get('http://192.168.0.110:2702/settings')
            .success(function (data, status, headers, config) {
                $scope.timezone = data.TimeZones;
                // $scope.selectedTestAccount = $scope.timeZone1[0];
                //console.log( $scope.timeZone1);
            })
            .error(function (data, status, headers, config) {
                console.error(data);
            });
        //locale
        $http.get('http://192.168.0.110:2702/settings')
            .success(function (data, status, headers, config) {
                $scope.locale = data.Locales;

                // console.log( $scope.locale);
            })
            .error(function (data, status, headers, config) {
                console.error(data);
            });
        //encoding
        $http.get('http://192.168.0.110:2702/settings')
            .success(function (data, status, headers, config) {
                $scope.encoding = data.Encodings;
                // $scope.selectedTestAccount = $scope.timeZone1[0];
                console.log($scope.encoding);
            })
            .error(function (data, status, headers, config) {
                console.error(data);
            });
    })();
    $scope.testClick = function () {
        console.log($scope.Configutation);
    }
    $scope.configpost = function () {

        var deferred = $q.defer();

        $http.post('http://localhost:3094/api/Country', {
            Locale: $scope.Configutation.locale,
            TimeZone: $scope.Configutation.timezone,
            Encoding: $scope.Configutation.encoding,
            DataLimitation: $scope.Configutation.Datalimitation
        })
            .success(function (data, status, headers, config) {
                deferred.resolve(data);
            })
            .error(function (data, status, headers, config) {
                deferred.reject(data);
            });

        return deferred.promise;
    };

}]);