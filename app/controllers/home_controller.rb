class HomeController < ApplicationController
	skip_before_action :verify_authenticity_token

	def index
	end

	# def get_contact
		# contacts = [
			# {
				# :name => 'John Smith', 
				# :email => 'a@a.com',
				# :add_1 => '123',
				# :add_2 => '12334',
				# :town => 'town',
				# :postcode => 'ab123cd',
				# :phone => '0221454212',
				# :dob => '15/07/2016'
			# },
			# {
				# :name => 'Jane Doe', 
				# :email => 'a@ba.com',
				# :add_1 => '123',
				# :add_2 => '12334',
				# :town => 'town2',
				# :postcode => 'ab123cd',
				# :phone => '0221454212',
				# :dob => '15/07/2016'
			# }
		# ]
		# contacts = Contact.all
		
		# render json: contacts, layout: false
	# end

	def put_contact
		contact = Contact.find(params['id'])
		
		if contact then
			contact.Name = params['Name']
			contact.Email = params['Email']
			contact.Add_1 = params['Add_1']
			contact.Add_2 = params['Add_2']
			contact.Town = params['Town']
			contact.Postcode = params['Postcode']
			contact.Phone = params['Phone']
			contact.DOB = params['DOB']
			contact.save
			render json: "", layout: false
		end
	end
	
	def post_contact
		contact = Contact.new
		contact.Name = params['Name']
		contact.Email = params['Email']
		contact.Add_1 = params['Add_1']
		contact.Add_2 = params['Add_2']
		contact.Town = params['Town']
		contact.Postcode = params['Postcode']
		contact.Phone = params['Phone']
		contact.DOB = params['DOB']
		contact.save
		render json: "", layout: false
	end
	
	def get_contact
		render json: Contact.find(params['id']), layout: false
	end
	
	def get_contacts
		render json: Contact.all, layout: false
	end
	
	def delete_contact
		contact = Contact.find(params['id'])
		if contact then
			contact.delete 
		end
		render json: "", layout: false
	end
	
end
