import { useState } from "react"
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Evangelion']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
        /* setCategories( (actualState) => [...actualState, newCategory]);*/ //Otro método!
    }

    return (
        <>
            <h1>Gif Expert App</h1>

            <AddCategory
                /* setCategories={setCategories}  */
                onNewCategory={(event) => onAddCategory(event)}
            />

            {categories.map(category => (
                <GifGrid key={category} category={category} />
            ))}
        </>
    )
}

export default GifExpertApp
