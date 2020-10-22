module.exports = {
	id: 'cac95329-9fa5-42f1-a4fc-c08af7b868fb',
	resourceId: 'cdb5f11f-62df-e611-80ee-0aa34a9b2388',
	topic: 'settlement_transfer_completed',
	created_at: '2017-01-20T22:45:12.790Z',
	event: {
		type: 'Settlement',
		resource: {
			reference: 'KKPPLLMMNN',
			origination_time: '2018-01-20T22:45:12.790Z',
			transfer_time: '2018-01-21T22:45:12.790Z',
			transfer_type: 'Bank Transfer',
			amount: 3000,
			currency: 'KES',
			status: 'Transferred',
			destination: {
				type: 'bank',
				mode: 'RTS',
				bank: 'Barclays Bank',
				branch: 'Ridgeways',
				account_number: '99999999999',
			},
		},
	},
	_links: {
		self: 'https://sandbox.kopokopo.com/events/cac95329-9fa5-42f1-a4fc-c08af7b868fb',
		resource: 'https://sandbox.kopokopo.com/transfer_batches/cdb5f11f-62df-e611-80ee-0aa34a9b2388',
	},
}
