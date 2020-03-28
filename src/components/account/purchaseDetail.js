import React, { Component } from 'react';
import { connect } from 'react-redux';

function PurchaseDetailLabel({ className, title, value }) {
	return (
		<div className={`${className} purchase-detail-label`}>
			<label className="purchase-detail-label__title">{title}</label>
			<div className="purchase-detail-label__value">{value}</div>
		</div>
	);
}

// _id: 0,
// total: 2.2,
// creditCard: '-0000',

class PurchaseDetail extends Component {
	render() {
		const { className, orderNumber, orderDate, user, total, creditCard } = this.props;
		const { name, shippingAddress } = user;

		return (
			<div className={`${className} purchase-detail`}>
				<PurchaseDetailLabel
					className="purchase-detail__order-number"
					title="Order Number"
					value={orderNumber}
				/>
				<PurchaseDetailLabel className="purchase-detail__order-date" title="Order Date" value={orderDate} />
				<PurchaseDetailLabel
					className="purchase-detail__detail_shipping"
					title="Shipping Address"
					value={`${name}\n${shippingAddress}`}
				/>
				<PurchaseDetailLabel className="purchase-detail__detail_total" title="Total" value={total} />
				<purchaseDetailLabel className="purchase-detail__credit-card" title="Credit Card" value={creditCard} />
			</div>
		);
	}
}

function mapStateToProps(state) {
	const { purchaseDetail } = state.user;
	return {
		...purchaseDetail
	};
}

PurchaseDetail = connect(mapStateToProps)(PurchaseDetail);

export default PurchaseDetail;
