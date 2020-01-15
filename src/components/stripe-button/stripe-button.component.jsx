import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_rIj5BRKJlh49KpzX8FrM5iwU00taMOSJIK';
	const onToken = token =>{
		console.log(token)
		alert('payment successful')
	}
	return(
		<StripeCheckout
		label='Pay Now'
		name='crown clothing'
		billingAddress
		shippingAddress
		image='https://svgshare.com/i/CUz.svg'
		description={`Your total is $${price}`}
		panelLabel='Pay Now'
		token={onToken}
		stripeKey={publishableKey}
		/>
	)
}

export default StripeCheckoutButton