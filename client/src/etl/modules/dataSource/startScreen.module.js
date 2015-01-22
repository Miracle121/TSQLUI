(function () {
    'use strict';
    angular.module("etl.startScreen", [])
        .controller('TabController', function ($scope) {

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

            $scope.tab1 = "RDMS Data Base";
            $scope.tab2 = "Social Data Base";
            $scope.tab3 = "File Data Base";

            //Initialize
            initTabs();

            $scope.setActiveTab(1);
        });
})();