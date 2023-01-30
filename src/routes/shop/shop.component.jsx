import { Route, Routes } from "react-router-dom";
import CateGoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
const Shop = () => {
    return(
        <>
            <Routes>
                <Route index element={<CateGoriesPreview />} />
                <Route path=":category" element={<Category />} />
            </Routes>
        </>
    )
}

export default Shop;