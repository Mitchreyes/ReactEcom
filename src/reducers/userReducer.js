import { SET_USER_PURCHASES, SET_PURCHASE_DETAIL } from '../actions/types';

const INITIAL_STATE = {
	purchases: [],
	purchaseDetail: []
};

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case SET_PURCHASE_DETAIL:
			let purchaseDetail;
			state.purchases.map((purchase) => {
				purchaseDetail = purchase;
			});
			return {
				...state,
				purchaseDetail
			};
		case SET_USER_PURCHASES:
			return {
				...state,
				purchases: action.payload
			};
		default:
			return state;
	}
}
