import { useContext } from 'react';

import { CartDropdownContext } from '../../component/context/cart-dorpdown.context';
import CheckOutItem from '../../component/checkout-item/checkout-item.component';
import {CheckOutContainer, CheckOutHeader, HeaderBlock, Total} from './checkout.style';


const CheckOut = () => {
    const {cartItems} = useContext(CartDropdownContext);

    let total = 0;
    return (
        <CheckOutContainer>
            <CheckOutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckOutHeader>
            {cartItems.map((cartItem) => {
                total += cartItem.price * cartItem.quantity;
                return (
                    <CheckOutItem key={cartItem.id} cartItem={cartItem} />
            )
            })}
            <Total>Total: ${total}</Total>
        </CheckOutContainer>
    );
}

export default CheckOut;