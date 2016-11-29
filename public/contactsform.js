angular.module('contactsform.demo', [])
	.controller('contactsformController', ['$scope', '$http', function ($scope, $http) {
        $scope.add = function (contact) {
            var contact = {
                name: contact.name,
                email: contact.email,
                add_1: contact.add_1,
                add_2: contact.add_2,
                town: contact.town,
                postcode: contact.postcode,
                phone: contact.phone,
                dob: contact.dob
            };
            $http.post('/routes/', contact)
                .then(function(response){
                    list.contacts.push(response.data);
                },
            function (){
                alert('Could not create contact');
            });
        };

        $scope.data = [];
        $http.get('/routes/').then(
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
    }]);