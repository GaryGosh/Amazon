import React from 'react';
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from './reducer';
import StripeCheckout from 'react-stripe-checkout';
import './Payment.css';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';


function Payment() {
    const [{basket}] = useStateValue();
    /* console.log(basket); */

    async function handleToken(token, addresses) {
        /* console.log({ token, addresses }); */
        const response = await axios.post("/paynow", {token, basket});

        const { status } = response.data;
        if(status === "success") {
            toast("Success! Check emial for details", {type: "success"});
        } else {
            toast("Something went wrong", {type: "error"});
        }

    }

    return (
        <div className="payment__container">
            <ToastContainer />
            <h1>Proceed to pay</h1>
            <p>Amount to be paid: ${getBasketTotal(basket)}</p>

            <StripeCheckout 
                stripeKey="pk_test_51HQqQPEDbLp2tlEKJoFKg3MEQQ0D9Ts6Sr7cF4L6vlgpDj56hZcnRfnQzV7Q3PBWJ9nNzrJReMYvbA4UGnlvNrHE00JADYxnSd"
                token={handleToken}
                billingAddress
                shippingAddress
                amount={getBasketTotal(basket)}
            />
        </div>
    )
}

export default Payment
