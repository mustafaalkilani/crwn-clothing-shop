import { useContext } from 'react';

import { CartDropdownContext } from '../context/cart-dorpdown.context';
import {CheckoutItemContainer, Arrow, Image, ImageContainer, Items, Quantity, RemoveButton, Value} from './checkout-item.style';

const CheckOutItem = ({cartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;

    const {cartItems, addToCartItems, setCartItems} = useContext(CartDropdownContext);

    const handelDecresingQuntityValueByOne = (product) => {
        addToCartItems(product, '-');
        if (product.quantity <= 1) {
            const selectedItem = cartItems.find((item) => item.id === product.id);
            if(selectedItem) {
                return setCartItems(cartItems.filter((item) => item.id !== product.id))
            }
        }
    }
    const handelIncressQuntityValueByOne = (product) => {
        addToCartItems(product, '+');
    }
    const handelRemoveElement = (product) => {
        const selectedItem = cartItems.find((item) => item.id === product.id);
        if(selectedItem) {
            return setCartItems(cartItems.filter((item) => item.id !== product.id));
        }
    }

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <Image src={imageUrl} alt={name} />
            </ImageContainer>
            <Items>{ name }</Items>
            <Quantity>
            <Arrow onClick={() => handelDecresingQuntityValueByOne(cartItem)}>&#10094;</Arrow>
            <Value>{ quantity }</Value>
            <Arrow onClick={() => handelIncressQuntityValueByOne(cartItem)}>&#10095;</Arrow>
            </Quantity>
            <Items>{ price }</Items>
            <RemoveButton onClick={() => handelRemoveElement(cartItem)}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
}

export default CheckOutItem;