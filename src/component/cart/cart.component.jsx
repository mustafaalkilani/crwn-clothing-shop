import {useContext} from 'react';

import { CartDropdownContext } from '../context/cart-dorpdown.context';
import { WebsiteThemeContext } from '../context/theme-color.context';

import {CartIconContainer, ItemCount, ShoppingIconEle, ShoppingIconDarkOneEle} from'./cart.style';

const CartIcon = () => {
    const {setIsOpen, isOpen, selectedItemsNumber} = useContext(CartDropdownContext);
    const {theme} = useContext(WebsiteThemeContext);
    const handelClick = () => {
        setIsOpen(isOpen === 'open' ? 'closed': 'open');
    }
    return (
        <CartIconContainer onClick={handelClick}>
            {theme === 'dark' ? <ShoppingIconDarkOneEle />: <ShoppingIconEle/>}
            <ItemCount>{selectedItemsNumber}</ItemCount> 
        </CartIconContainer>
    )
}

export default CartIcon;

