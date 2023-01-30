import CategoryItem from '../category-item/category-item.component'

import {CategoriesContainer} from './category-menu.style';

const CategoryMenu = ({ categories }) => {
    return (
        <CategoriesContainer>
            {
                categories.map(({ title, id, imageUrl }) => {
                    return (
                    <CategoryItem key={id} title={title} imageUrl={imageUrl} />
                    )
                })
            }
        </CategoriesContainer>
    )
}

export default CategoryMenu;