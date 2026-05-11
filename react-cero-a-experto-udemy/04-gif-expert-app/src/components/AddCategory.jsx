import { useState } from "react"
import propTypes from "prop-types";

const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault(); //Evita que el formulario recargue la página.
        if (inputValue.trim().length <= 1) return;

        /* setCategories((pastCategories) => [...pastCategories, inputValue]); */ //Usar el callback para traer el state actual.
        onNewCategory(inputValue.trim())
        setInputValue('');
    };

    return (
        <form onSubmit={onSubmit} aria-label="form">
            <input
                type="text"
                placeholder="Gif searcher"
                value={inputValue}
                /* onChange={(event) => onInputChange(event)} -> Le pasa el event por default */
                onChange={onInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: propTypes.func.isRequired,
}

export default AddCategory;