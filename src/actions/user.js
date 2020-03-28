import { SET_USER_PURCHASES, SET_PURCHASE_DETAIL } from './types';

export function setPurchaseDetail(_id) {
	return {
		type: SET_PURCHASE_DETAIL,
		payload: _id
	};
}

export function fetchUserPurchases() {
	return {
		type: SET_USER_PURCHASES,
		payload: [
			{
				_id: 0,
				total: 2.2,
				orderNumber: 2931391,
				orderDate: new Date(),
				creditCard: '-0000',
				user: {
					name: 'Tim Reyes',
					shippingAddress: '1234 West st'
				}
			},
			{
				_id: 1,
				total: 15.2,
				orderNumber: 2931391,
				orderDate: new Date(),
				creditCard: '-0000',
				user: {
					name: 'Mitch Reyes',
					shippingAddress: '1234 West st'
				}
			},
			{
				_id: 2,
				total: 23,
				orderNumber: 2231391,
				orderDate: new Date(),
				creditCard: '-0000',
				user: {
					name: 'John Reyes',
					shippingAddress: '1233 Eest st'
				}
			},
			{
				_id: 3,
				total: 15.2,
				orderNumber: 2931391,
				orderDate: new Date(),
				creditCard: '-0000',
				user: {
					name: 'Mitch Reyes',
					shippingAddress: '1234 West st'
				}
			},
			{
				_id: 4,
				total: 15.2,
				orderNumber: 2931391,
				orderDate: new Date(),
				creditCard: '-0000',
				user: {
					name: 'Mitch Reyes',
					shippingAddress: '1234 West st'
				}
			},
			{
				_id: 5,
				total: 15.2,
				orderNumber: 2931391,
				orderDate: new Date(),
				creditCard: '-0000',
				user: {
					name: 'Mitch Reyes',
					shippingAddress: '1234 West st'
				}
			},
			{
				_id: 6,
				total: 15.2,
				orderNumber: 2931391,
				orderDate: new Date(),
				creditCard: '-0000',
				user: {
					name: 'Mitch Reyes',
					shippingAddress: '1234 West st'
				}
			},
			{
				_id: 7,
				total: 15.2,
				orderNumber: 2931391,
				orderDate: new Date(),
				creditCard: '-0000',
				user: {
					name: 'Mitch Reyes',
					shippingAddress: '1234 West st'
				}
			}
		]
	};
}
