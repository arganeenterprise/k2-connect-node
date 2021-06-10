module.exports.location = {
	location: 'https://sandbox.kopokopo.com/polling/5af4c10a-f6de-4ac8-840d-42cb65454216',
	'Content-Type': 'application/json',
}
module.exports.status = {
	"data": {
		"id": "7aeb309d-8577-4546-8557-ef5d6c01b948",
		"type": "polling",
		"attributes": {
			"status": "Success",
			"from_time": "2021-03-28T08:50:22+03:00",
			"to_time": "2021-04-01T08:50:22+03:00",
			"transactions": [
				{
					"type": "Buygoods Transaction",
					"resource": {
						"id": "c40d5a7a-09ef-4c8b-b5e4-8adb30d66c37",
						"amount": "1.0",
						"status": "Received",
						"system": "Lipa Na M-PESA",
						"currency": "KES",
						"reference": "9e53317173f0d4b3fed16bb92fac74a4",
						"till_number": "K123456",
						"origination_time": "2021-03-29T07:44:45+03:00",
						"sender_last_name": "Doe",
						"sender_first_name": "Jane",
						"sender_middle_name": null,
						"sender_phone_number": "+254799999999"
					}
				}
			],
			"scope": "Company",
			"scope_reference": null,
			"_links": {
				"callback_url": "https://webhook.site/251982d5-0400-47a5-9ac5-736acf756a54",
				"self": "https://sandbox.kopokopo.com/api/v1/polling/7aeb309d-8577-4546-8557-ef5d6c01b948"
			}
		}
	}
}