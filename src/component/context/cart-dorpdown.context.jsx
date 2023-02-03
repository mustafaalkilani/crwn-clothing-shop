import { createContext, useEffect, useReducer } from "react";

import { USER_ACTION_TYPES } from "../../utils/reducer/reducer.utils";

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
    total: 0,
    setTotal: () => null,
});

const INTAL_STATE_VALUE = {
    isOpen: null,
    cartItems: [],
    selectedItemsNumber: 0,
    total: 0,
}

const cartDropDownReducer = (state, action) => {
    const {type, payload} = action;
    switch(type) {
        case USER_ACTION_TYPES.SET_CART_IS_OPEN:
            return {
                ...state,
                isOpen: payload
            }
        case USER_ACTION_TYPES.ADD_ITEM_TO_CART:
            return {
                ...state,
                cartItems: payload,
            }
        case USER_ACTION_TYPES.SELECTED_ITMES_NUMBER:
            return {
                ...state,
                selectedItemsNumber: payload,
            }
        case USER_ACTION_TYPES.SET_TOTAL:
            return {
                ...state,
                total: payload,
            }
        default: 
            throw new Error(`unhandled action type "${type}" in cartDropDownReducer`);
    }
}

export const CartDropdownProvider = ({children}) => {
    const [{isOpen, cartItems, selectedItemsNumber, total}, dispatch] = useReducer(cartDropDownReducer, INTAL_STATE_VALUE);

    const setIsOpen = (cartOpened) => {
        dispatch({type: USER_ACTION_TYPES.SET_CART_IS_OPEN, payload: cartOpened})
    }
    const setCartItems = (cartItem) => {
        dispatch({type: USER_ACTION_TYPES.ADD_ITEM_TO_CART, payload: cartItem})
    }
    const setSelectedItemsNumber = (selectedNumber) => {
        dispatch({type: USER_ACTION_TYPES.SELECTED_ITMES_NUMBER, payload: selectedNumber})
    }
    const setTotal = (newTotal) => {
        dispatch({type: USER_ACTION_TYPES.SET_TOTAL, payload: newTotal})
    }
    useEffect(() => {
        const newSelectItemCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setSelectedItemsNumber(newSelectItemCount);
    }, [cartItems]);
    const addToCartItems = (productToAdd, math) => {
        setCartItems(addCartItem(cartItems, productToAdd, math));
    } 
    const value = {isOpen, setIsOpen, addToCartItems, cartItems, setCartItems, selectedItemsNumber, setSelectedItemsNumber, total, setTotal};
    return <CartDropdownContext.Provider value={value}>{children}</CartDropdownContext.Provider>
}