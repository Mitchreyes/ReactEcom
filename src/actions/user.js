import { SET_USER_PURCHASES, SET_PURCHASE_DETAIL, SET_CART_PRODUCTS, ADD_CART_PRODUCT } from './types';

export function setPurchaseDetail(_id) {
	return {
		type: SET_PURCHASE_DETAIL,
		payload: _id
	};
}

export function addCartProduct(product) {
	return {
		type: ADD_CART_PRODUCT,
		payload: product
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
						'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.',
					price: 1.99,
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
						'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.',
					price: 4.99,
					belongsTo: [ 0, 6 ]
				},
				quantity: 1
			},
			{
				_id: 2,
				product: {
					_id: 1,
					title: 'Full Stack Development',
					description:
						'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.',
					price: 3,
					belongsTo: [ 0, 2, 4 ]
				},
				quantity: 1
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
