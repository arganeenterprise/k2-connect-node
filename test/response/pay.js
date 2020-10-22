module.exports.status = {
	status: 'Scheduled',
	reference: 'KKKKKKKKK',
	origination_time: '2018-07-20T22:45:12.790Z',
	destination: 'c7f300c0-f1ef-4151-9bbe-005005aa3747',
	amount: {
		currency: 'KES',
		value: 20000,
	},
	metadata: {
		customerId: '8675309',
		notes: 'Salary payment for May 2018',
	},
	_links: {
		self: 'https://sandbox.kopokopo.com/payments/d76265cd-0951-e511-80da-0aa34a9b2388',
	},
}
module.exports.recipientsLocation = {
	location: 'https://sandbox.kopokopo.com/pay_recipients/c7f300c0-f1ef-4151-9bbe-005005aa3747',
	'Content-Type': 'application/json',
}
module.exports.location = {
	'Content-Type': 'application/json',
	location: 'https://sandbox.kopokopo.com/payments/c7f300c0-f1ef-4151-9bbe-005005aa3747',
}
