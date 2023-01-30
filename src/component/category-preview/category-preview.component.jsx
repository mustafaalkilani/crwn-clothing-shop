import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import { WebsiteThemeContext } from "../context/theme-color.context";
import ProductCard from "../../component/product-card/product-card.component";

import {CategoryPreviewContainer, CategoryTitle, CategoryTitleContainer, ProductsContainer} from './category-preview.style';

const CategoryPreview = ({title, products}) => {
    const {theme} = useContext(WebsiteThemeContext);
    const navigate = useNavigate();
    const handelClick = () => {
        navigate(`/shop/${title}`);
    }

    return (
        <CategoryPreviewContainer>
            <CategoryTitleContainer>
                <CategoryTitle style={{'color': `${theme === 'dark' ? 'rgb(255, 255, 255)': 'rgb(0, 0, 0)'}`}} onClick={handelClick}>{title}</CategoryTitle>
            </CategoryTitleContainer>
            <ProductsContainer>
            {products.slice(0, 4).map((product) => {
                return (
                    <ProductCard key={product.id} product={product} />
                )
            })}
            </ProductsContainer>
        </CategoryPreviewContainer>
    );
}

export default CategoryPreview;