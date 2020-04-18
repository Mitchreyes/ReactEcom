import { SET_USER_PURCHASES, SET_PURCHASE_DETAIL, SET_CART_PRODUCTS } from './types';

export function setPurchaseDetail(_id) {
	return {
		type: SET_PURCHASE_DETAIL,
		payload: _id
	};
}

export function fetchCartProducts() {
	return {
		type: SET_CART_PRODUCTS,
		payload: [
			{
				_id: 0,
				product: {
					_id: 0,
					title: 'JavaScript in the Browser',
					description:
						'The FitnessGram Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start',
					price: '2.5',
					belongsTo: [ 0, 1 ]
				},
				quantity: 2
			},
			{
				_id: 1,
				product: {
					_id: 1,
					title: 'Graph Database',
					description:
						'The FitnessGram Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start',
					price: '3.2',
					belongsTo: [ 0, 6 ]
				},
				quantity: 3
			},
			{
				_id: 2,
				product: {
					_id: 2,
					title: 'Full Stack Development',
					description:
						'The FitnessGram Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start',
					price: '1.6',
					belongsTo: [ 0, 1, 2 ]
				},
				quantity: 1
			},
			{
				_id: 3,
				product: {
					_id: 3,
					title: 'JavaScript Development',
					description:
						'The FitnessGram Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start',
					price: '2.4',
					belongsTo: [ 0, 3 ]
				},
				quantity: 4
			},
			{
				_id: 4,
				product: {
					_id: 4,
					title: 'User Interface Design',
					description:
						'The FitnessGram Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start',
					price: '1.20',
					belongsTo: [ 0, 2 ]
				},
				quantity: 5
			},
			{
				_id: 5,
				product: {
					_id: 5,
					title: 'User Experience Design',
					description:
						'The FitnessGram Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start',
					price: '6',
					belongsTo: [ 0, 5, 4 ]
				},
				quantity: 2
			},
			{
				_id: 6,
				product: {
					_id: 6,
					title: 'Advanced OOP',
					description:
						'The FitnessGram Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start',
					price: '9.2',
					belongsTo: [ 0, 6 ]
				},
				quantity: 0
			}
		]
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
				orderDate: new Date().toDateString(),
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
				orderDate: new Date().toDateString(),
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
				orderDate: new Date().toDateString(),
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
				orderDate: new Date().toDateString(),
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
				orderDate: new Date().toDateString(),
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
				orderDate: new Date().toDateString(),
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
				orderDate: new Date().toDateString(),
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
				orderDate: new Date().toDateString(),
				creditCard: '-0000',
				user: {
					name: 'Mitch Reyes',
					shippingAddress: '1234 West st'
				}
			}
		]
	};
}
