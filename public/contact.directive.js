(function () {
    'use strict';

    angular.module('contactsform.demo')
        .directive('contactsformContact', ContactDirective);


    function ContactDirective() {
        return {
            templateUrl: '/static/contactsform/contact.html',
            restrict: 'E',
            controller: ['$scope', '$http', function ($scope, $http) {
                var url = '/contactsform/contacts/' + $scope.contact.id + '/';
                $scope.update = function () {
                    $http.put(
                        url,
                        $scope.contact
                    );
                };

                $scope.delete = function(){
                    $http.delete(url).then(
                        function(){
                            var contacts = $scope.list.contacts;
                            contacts.splice(
                                contacts.indexOf($scope.contact),
                                1
                            );
                        }
                    );
                };

                $scope.modelOptions = {
                    debounce: 500
                };
            }]
        };
    }
})();