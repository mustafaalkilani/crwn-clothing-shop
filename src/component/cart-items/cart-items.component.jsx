import {CartItemContainer, Image, ItemDetails, ItemName} from'./cart-items.style';

const CartItem = ({CartItems}) => {
    const {quantity, name, imageUrl , price} = CartItems;
    return (
        <CartItemContainer>
        <Image src={imageUrl} alt={name}/>
        <ItemDetails>
            <ItemName>{name}</ItemName>
            <span className='price'>{quantity} x ${price}</span>
        </ItemDetails>
        </CartItemContainer>

    )
}

export default CartItem;