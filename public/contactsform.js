angular.module('contactsform.demo', [])
	.controller('contactsformController', ['$scope', '$http', function ($scope, $http) {
        $scope.add = function (contact) {
			console.log(contact);
            var data = {
				//params: {
					Name: contact.name,
					Email: contact.email,
					Add_1: contact.add_1,
					Add_2: contact.add_2,
					Town: contact.town,
					Postcode: contact.postcode,
					Phone: contact.phone,
					DOB: contact.dob
				//}
            };
			var config = {
				headers: {
					'Content-Type': 'application/json'
				}
			};
            $http.post('/contacts/', data, config)
                .then(function(response){
                    $scope.data.push(data);
                },
            function (){
                alert('Could not create contact');
            });
        };

        $scope.data = [];
        $http.get('/contacts/').then(
            function(response){
                $scope.data = response.data;
            }
        );
		
		  $scope.isOpened = false;

	    $scope.dateOptions = {
		    dateDisabled: false,
		    formatYear: 'yy',
		    maxDate: new Date(),
		    minDate: new Date(1900, 1, 1),
		    startingDay: 1
	    };

	    $scope.open = function() {
		    $scope.isOpened = true;
	    };
		
		$scope.update = function () {
            $http.put(url, $scope.contact);
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
    }]);