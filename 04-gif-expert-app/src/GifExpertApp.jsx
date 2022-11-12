import { useState } from "react";
// import { AddCategory } from "./components/AddCategory";
// import { GifGrid } from "./components/GifGrid";
import { AddCategory, GifGrid } from "./components";
export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Cars']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return
        setCategories(categories => [newCategory, ...categories]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory
                onNewCategory={onAddCategory}
            />
            {
                categories.map((category) =>
                (
                    <GifGrid key={category} category={category} />
                )
                )
            }
        </>
    )
};