import CategoriesList from "./CategoriesList"
import CategoryForm from "./CategoryForm"
function CategoriesContainer(props) {
    return (
        <div>
            <h2>Listing Categories - { props.categories.length } </h2>
            { props.categories.length == 0 ? <p>No categories found. Add your first category </p> : (
                <CategoriesList 
                        categories={props.categories} 
                        removeCategory={props.removeCategory}    
                    />
            )}
            <CategoryForm addCategory={props.addCategory} /> 
        </div>
    )
}

export default CategoriesContainer