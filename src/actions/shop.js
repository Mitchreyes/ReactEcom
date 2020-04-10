import {
	FILTER_PRODUCTS_WITH_CATEGORY_ID,
	SET_NAVBAR_LINKS,
	SET_SHOP_PRODUCTS,
	SET_SHOP_CATEGORIES,
	FILTER_PRODUCTS_WITH_QUERY
} from './types';

export function filterProductsWithQuery(fields) {
	return {
		type: FILTER_PRODUCTS_WITH_QUERY,
		payload: fields
	};
}

export function filterProductsWithCategoryId(_id) {
	console.log(_id);
	return {
		type: FILTER_PRODUCTS_WITH_CATEGORY_ID,
		payload: _id
	};
}

export function fetchShopCategories() {
	return {
		type: SET_SHOP_CATEGORIES,
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
				price: '2.5',
				belongsTo: [ 0, 1 ]
			},
			{
				_id: 1,
				title: 'Graph Database',
				description:
					'The FitnessGram Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start',
				price: '3.2',
				belongsTo: [ 0, 6 ]
			},
			{
				_id: 2,
				title: 'Full Stack Development',
				description:
					'The FitnessGram Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start',
				price: '1.6',
				belongsTo: [ 0, 1, 2 ]
			},
			{
				_id: 3,
				title: 'JavaScript Development',
				description:
					'The FitnessGram Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start',
				price: '2.4',
				belongsTo: [ 0, 3 ]
			},
			{
				_id: 4,
				title: 'User Interface Design',
				description:
					'The FitnessGram Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start',
				price: '1.20',
				belongsTo: [ 0, 2 ]
			},
			{
				_id: 5,
				title: 'User Experience Design',
				description:
					'The FitnessGram Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start',
				price: '6',
				belongsTo: [ 0, 5, 4 ]
			},
			{
				_id: 6,
				title: 'Advanced OOP',
				description:
					'The FitnessGram Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start',
				price: '9.2',
				belongsTo: [ 0, 6 ]
			}
		]
	};
}
