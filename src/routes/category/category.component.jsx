import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

import { CategoriesContext } from "../../component/context/categories.context";
import { WebsiteThemeContext } from "../../component/context/theme-color.context";
import ProductCard from "../../component/product-card/product-card.component";
import LoaderSpinner from "../../component/loader-spinner/lodaer-spinner.component";
import {ContentCatgoryContainer, TitleContainer, CategoryTitle, CategoryContainer} from './category.style';

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const {theme} = useContext(WebsiteThemeContext);
    const [product, setProduct] = useState(categoriesMap[category]);

    useEffect(() => {
        setProduct(categoriesMap[category])
    }
    ,[category, categoriesMap])

    return (
        <ContentCatgoryContainer>
            <TitleContainer>
                {product ? <CategoryTitle style={{'color': `${theme === 'dark' ? 'rgb(255, 255, 255)': 'rgb(51, 51, 51)'}`}}>{category}</CategoryTitle>: <LoaderSpinner />}              
            </TitleContainer>
            <CategoryContainer>
                {product && product.map((product) => <ProductCard key={product.id} product={product} />)}
            </CategoryContainer>
        </ContentCatgoryContainer>
    )
}

export default Category;