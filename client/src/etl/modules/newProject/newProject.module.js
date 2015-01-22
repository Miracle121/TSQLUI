(function () {
    'use strict';
    angular.module("etl.newProject", ['angularTreeview'])
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

    angular.module("etl.newProject", ['angularTreeview']).controller('SelectionCtrl', function ($scope) {

        $scope.tables = [{
            roleName: "Products", roleId: 'role121', children: [
                {
                    "roleName": "Id", "roleId": "role1"
                },
                {
                    "roleName": "ProductName", "roleId": "role1"
                },
                {
                    "roleName": "Price", "roleId": "role1"
                }
            ]
        },
            {
                roleName: "Categories", roleId: 'role121', children: [
                {
                    "roleName": "Id", "roleId": "role1"
                },
                {
                    "roleName": "Name", "roleId": "role1"
                },
                {
                    "roleName": "Type", "roleId": "role1"
                }
            ]
            },
            {
                roleName: "Employees", roleId: 'role121', children: [
                {
                    "roleName": "Id", "roleId": "role1"
                },
                {
                    "roleName": "Name", "roleId": "role1"
                },
                {
                    "roleName": "Type", "roleId": "role1"
                }
            ]
            },
            {
                roleName: "Countries", roleId: 'role121', children: [
                {
                    "roleName": "Id", "roleId": "role1"
                },
                {
                    "roleName": "Name", "roleId": "role1"
                },
                {
                    "roleName": "Type", "roleId": "role1"
                }
            ]
            }
        ];

        $scope.db = [{"roleName": "NorthWind", "roleId": "role1", "children": $scope.tables}];

        $scope.roleList = $scope.products;

    });
})();


(function (f) {
    f.module("angularTreeview", []).directive("treeModel", function ($compile) {
        return {
            restrict: "A", link: function (b, h, c) {
                var a = c.treeId, g = c.treeModel, e = c.nodeLabel || "label", d = c.nodeChildren || "children", e = '<ul><li data-ng-repeat="node in ' + g + '"><i class="collapsed" data-ng-show="node.' + d + '.length && node.collapsed" data-ng-click="' + a + '.selectNodeHead(node)"></i><i class="expanded" data-ng-show="node.' + d + '.length && !node.collapsed" data-ng-click="' + a + '.selectNodeHead(node)"></i><i class="normal" data-ng-hide="node.' +
                    d + '.length"></i> <span data-ng-class="node.selected" data-ng-click="' + a + '.selectNodeLabel(node)">{{node.' + e + '}}</span><div data-ng-hide="node.collapsed" data-tree-id="' + a + '" data-tree-model="node.' + d + '" data-node-id=' + (c.nodeId || "id") + " data-node-label=" + e + " data-node-children=" + d + "></div></li></ul>";
                a && g && (c.angularTreeview && (b[a] = b[a] || {}, b[a].selectNodeHead = b[a].selectNodeHead || function (a) {
                    a.collapsed = !a.collapsed
                }, b[a].selectNodeLabel = b[a].selectNodeLabel || function (c) {
                    b[a].currentNode && b[a].currentNode.selected &&
                    (b[a].currentNode.selected = void 0);
                    c.selected = "selected";
                    console.log(b);
                    b[a].currentNode = c
                }), h.html('').append($compile(e)(b)))
            }
        }
    })
})(angular);


