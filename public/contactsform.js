angular.module('contactsform.demo', ['ui.bootstrap'])
	.controller('contactsformController', ['$scope', '$http', function ($scope, $http) {
		
		
		$scope.add = function (contact) {
            
			var data = {
				//params: {
					Name: contact.Name,
					Email: contact.Email,
					Add_1: contact.Add_1,
					Add_2: contact.Add_2,
					Town: contact.Town,
					Postcode: contact.Postcode,
					Phone: contact.Phone,
					DOB: contact.DOB
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
					console.log($scope.data);
                   /*  $http.get('/contacts/').then(
					function(response){
						$scope.data = response.data;
					}
				}); */
					
                },
						
            
			function (){
                alert('Could not create contact');
            });
			$scope.contact = [];
        };

        $scope.populate = function(){
			
			$scope.contact = {
				"Name":"Will",
				"Email":"will@will.com",
				"Add_1":"345 Any Street",
				"Add_2":"Green Hill",
				"Town":"Bristol",
				"Postcode":"BS2 8UI",
				"Phone":"01234897654",
				"DOB":"1989-04-25"
			};
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
		//$scope.contacts = [];
		$scope.update = function(contact) {
			$scope.contact = angular.copy(contact);
			$scope.showedit = true;
		};

		$scope.change = function(contact){
			var config = {
				headers: {
					'Content-Type': 'application/json'
				}
			};
			$http.put('/contacts/'+contact.ID, contact)
			.then(function(response){
				$http.get('/contacts/').then(
					function(response){
						$scope.data = response.data;
					}
				);
			});
			$scope.contact = [];
		};
		
        $scope.delete = function(contact){
            
			$http.delete('contacts/'+contact.ID).then(
                function(){
                    var contacts = $scope.data;
                        contacts.splice(
                            contacts.indexOf(contact),
                            1
                        );
                }
            );
        };
		
		
		$scope.sortType = 'Name';
		$scope.sortReverse = false;
		$scope.searchContacts = '';
		
    }]);