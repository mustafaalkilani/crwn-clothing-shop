import { CardElement, useStripe, useElements} from "@stripe/react-stripe-js";
import { useState, useContext } from "react";

import { UserContext } from "../context/user.context";
import { CartDropdownContext } from "../context/cart-dorpdown.context";
import Button, {buttonTypeClassName} from "../button/button.component";

import {FormContainer, PaymentFormContainer, H2} from './payment-form.styles';

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const {currentUser} = useContext(UserContext);
    const {total, setTotal, setCartItems, setSelectedItemsNumber} = useContext(CartDropdownContext);
    const [isProcessingPayment, setIsProccingPayment] = useState(false);
    let amount = 0;
    let username = '';
    const paymentHandler = async (e) => {
    e.preventDefault();

    if(!stripe || !elements) {
        return;
    }
    setIsProccingPayment(true);

    if(total) {
        amount = total * 100;
    } else if(!total) {
        alert('please select something!');
        setIsProccingPayment(false);
    }
    const response = await fetch('/.netlify/functions/create-payment-intent', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount }),
        }).then((res) => {
        return res.json();
        });
        console.log(response);
    const {paymentIntent: { client_secret }} = response;
    console.log(response);

    if(currentUser) {
        username = currentUser.displayName
    } else if (!currentUser) {
        alert('Please Sign In');
        setIsProccingPayment(false);
        return;
    }

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: username,
          },
        },
      });

    setIsProccingPayment(false);
    console.log(isProcessingPayment);

    if (paymentResult.error) {
        alert(paymentResult.error);
    } else if (paymentResult.paymentIntent.status === 'succeeded') {
        alert('Payment Successful');
        console.log('done');
        setTotal(0);
        setCartItems([]);
        setSelectedItemsNumber(0);
    }

    } 

    
    return (
        <PaymentFormContainer>
            <FormContainer onSubmit={paymentHandler}>
                <H2>Credit Card Payment: </H2>
                <CardElement style={{'padding': '10px'}}/>
                <Button isLoading={isProcessingPayment} buttonType={buttonTypeClassName.inverted}>Pay Now</Button>
            </FormContainer>
        </PaymentFormContainer>
    );
}

export default PaymentForm;