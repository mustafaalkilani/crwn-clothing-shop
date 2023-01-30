import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd, math) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

    if(existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? {...cartItem, 'quantity': math === '+' ? cartItem.quantity + 1: cartItem.quantity - 1}: cartItem);
    } else {
        return [...cartItems, {...productToAdd, 'quantity': 1}];
    }
}

export const CartDropdownContext = createContext({
    isOpen: null,
    setIsOpen: () => null,
    cartItems : [],
    addToCartItems: () => {},
    selectedItemsNumber: 0,
});

export const CartDropdownProvider = ({children}) => {
    const [isOpen, setIsOpen] = useState(null);
    const [cartItems, setCartItems] = useState([]);
    const [selectedItemsNumber, setSelectedItemsNumber] = useState(0);

    useEffect(() => {
        const newSelectItemCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setSelectedItemsNumber(newSelectItemCount);
    }, [cartItems]);
    const addToCartItems = (productToAdd, math) => {
        setCartItems(addCartItem(cartItems, productToAdd, math));
    } 
    const value = {isOpen, setIsOpen, addToCartItems, cartItems, setCartItems, selectedItemsNumber};
    return <CartDropdownContext.Provider value={value}>{children}</CartDropdownContext.Provider>
}