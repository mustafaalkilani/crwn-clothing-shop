import { useContext } from 'react';

import { CartDropdownContext } from '../context/cart-dorpdown.context';
import {Image, CardButton, Fotter, Name, Price, ProductCardContainer} from './product-card.style';

import { buttonTypeClassName } from '../button/button.component';

const ProductCard = ({product}) => {
    const {name, price, imageUrl} = product;
    const {addToCartItems} = useContext(CartDropdownContext);
    
    const addProductToCartItem = () => addToCartItems(product, '+');
    return(     
        <ProductCardContainer>
        <Image src={imageUrl} alt={`${name}`}/>
        <Fotter>
            <Name>{name}</Name>
            <Price>${price}</Price>
        </Fotter>
        <CardButton buttonType={buttonTypeClassName.inverted} onClick={addProductToCartItem}>Add to cart</CardButton>
     </ProductCardContainer>

    )
}

export default ProductCard