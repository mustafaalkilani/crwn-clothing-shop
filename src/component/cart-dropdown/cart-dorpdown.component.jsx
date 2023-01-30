import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartDropdownContext } from '../context/cart-dorpdown.context';
import {CartDropDwonContainer, CartItemsEl, NoItemsInCartItemsEl, CheckOutButtonContainer} from'./cart-dropdown.style';

import CartItem from '../cart-items/cart-items.component';
import Button from '../button/button.component';

const CartDropdown = () => {
    const {cartItems, setIsOpen} = useContext(CartDropdownContext);

    const navigate = useNavigate();


    const handelClick = () => {
        navigate('/checkout')
        setIsOpen('closed');
    }
    return (
        <CartDropDwonContainer style={{'backgroundColor': `${document.body.style.backgroundColor ==='rgb(33, 33, 33)' ? 'rgb(33, 33, 33)': 'rgb(255, 255, 255)'}`}}>
                {cartItems.length === 0 ?
                    <NoItemsInCartItemsEl>
                        {cartItems.length === 0 ?  'Your cat is empty': cartItems.map((item) => <CartItem key={item.id} CartItems={item}/>)}
                    </NoItemsInCartItemsEl>: 
                    <CartItemsEl>
                        {cartItems.length === 0 ?  'Your cat is empty': cartItems.map((item) => <CartItem key={item.id} CartItems={item}/>)}
                </CartItemsEl>
                }
            <CheckOutButtonContainer>
                <Button onClick={handelClick}>GO TO CHECKOUT</Button>
            </CheckOutButtonContainer>
        </CartDropDwonContainer>
    )
}

export default CartDropdown;