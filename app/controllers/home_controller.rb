class HomeController < ApplicationController
	

	def index
	end

	def get_contact
		contacts = [
			{
				:name => 'John Smith', 
				:email => 'a@a.com',
				:add_1 => '123',
				:add_2 => '12334',
				:town => 'town',
				:postcode => 'ab123cd',
				:phone => '0221454212',
				:dob => '15/07/2016'
			},
			{
				:name => 'Jane Doe', 
				:email => 'a@ba.com',
				:add_1 => '123',
				:add_2 => '12334',
				:town => 'town2',
				:postcode => 'ab123cd',
				:phone => '0221454212',
				:dob => '15/07/2016'
			}
		]
		contacts = Contact.all
		
		render json: contacts, layout: false
	end

	def put_contact
		contact = Contact.find(params['id'])
		
		if contact then
			contact.name = params['name']
			
			contact.save
		end
	end
	
	def post_contact
		contact = Contact.new
		contact.name = params['name']
		contact.email = params['email']
		contact.add_1 = params['add_1']
		contact.add_2 = params['add_2']
		contact.town = params['town']
		contact.postcode = params['postcode']
		contact.phone = params['phone']
		contact.dob = params['dob']
		contact.save
	end
	
	def get_contact
		render json: Contact.find(params['id']), layout: false
	end
end
