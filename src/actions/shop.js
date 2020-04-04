import {
	//SET_SHOP_CATEGORIES,
	SET_NAVBAR_LINKS,
	SET_SHOP_PRODUCTS
} from './types';

export function fetchShopCategories() {
	return {
		type: SET_NAVBAR_LINKS,
		payload: [
			{
				_id: 0,
				title: 'All'
			},
			{
				_id: 1,
				title: 'Javascript'
			},
			{
				_id: 2,
				title: 'Python'
			},
			{
				_id: 3,
				title: 'UML'
			},
			{
				_id: 4,
				title: 'Ruby'
			},
			{
				_id: 5,
				title: 'Linux'
			},
			{
				_id: 6,
				title: 'UI/UX'
			}
		]
	};
}

export function fetchShopProducts() {
	return {
		type: SET_SHOP_PRODUCTS,
		payload: [
			{
				_id: 0,
				title: 'JavaScript in the Browser',
				description:
					'The FitnessGram Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start',
				price: '',
				belongsTo: [ 0, 1 ]
			},
			{
				_id: 1,
				title: 'Graph Database',
				description:
					'The FitnessGram Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start',
				price: '',
				belongsTo: [ 0, 6 ]
			},
			{
				_id: 2,
				title: 'Full Stack Development',
				description:
					'The FitnessGram Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start',
				price: '',
				belongsTo: [ 0, 1, 2 ]
			},
			{
				_id: 3,
				title: 'JavaScript Development',
				description:
					'The FitnessGram Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start',
				price: '',
				belongsTo: [ 0, 3 ]
			},
			{
				_id: 4,
				title: 'User Interface Design',
				description:
					'The FitnessGram Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start',
				price: '',
				belongsTo: [ 0, 2 ]
			},
			{
				_id: 5,
				title: 'User Experience Design',
				description:
					'The FitnessGram Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start',
				price: '',
				belongsTo: [ 0, 5, 4 ]
			},
			{
				_id: 6,
				title: 'Advanced OOP',
				description:
					'The FitnessGram Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start',
				price: '',
				belongsTo: [ 0, 6 ]
			}
		]
	};
}
