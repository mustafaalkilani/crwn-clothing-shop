
import { useContext } from "react";
import { CategoriesContext } from "../../component/context/categories.context";
import CategoryPreview from "../../component/category-preview/category-preview.component";
import LoaderSpinner from "../../component/loader-spinner/lodaer-spinner.component";

const CateGoriesPreview = () => {
    const {categoriesMap} = useContext(CategoriesContext);
    console.log(categoriesMap)
    return(
        <>
        {
            categoriesMap['hats'] ? Object.keys(categoriesMap).map(title => {
                const product = categoriesMap[title]
                return <CategoryPreview key={title} products={product} title={title} />
            }): <LoaderSpinner />
        }
        </>
    )
}

export default CateGoriesPreview;