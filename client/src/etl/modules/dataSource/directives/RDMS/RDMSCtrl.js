(function () {
    'use strict';
    angular.module("etl.startScreen", [])
        .controller('TabCtrl', function () {

            var tabClasses;

            function initTabs() {
                tabClasses = ["", "", ""];
            }

            $scope.getTabClass = function (tabNum) {
                return tabClasses[tabNum];
            };

            $scope.getTabPaneClass = function (tabNum) {
                return "tab-pane " + tabClasses[tabNum];
            }

            $scope.setActiveTab = function (tabNum) {
                initTabs();
                tabClasses[tabNum] = "active";
            };

            $scope.tab1 = "Connection List controllerdan";
            $scope.tab2 = "New Connection controllerdan";

            //Initialize
            initTabs();
            $scope.setActiveTab(1);

        });
})();