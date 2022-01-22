import { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({ addCategory }) => {
    const [inputValue, setInputValue] = useState('')
    const handleInputChange = e => {
        setInputValue(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (inputValue.trim().length > 2) addCategory(inputValue)
        setInputValue('')
    }
    return (
        <form onSubmit={handleSubmit} className='add-category__form'>
            <input
                type="text"
                value={inputValue}
                placeholder="Add a category"
                onChange={handleInputChange}
            />
        </form>
    )
}
AddCategory.propTypes = {
    addCategory: PropTypes.func.isRequired,
}

export default AddCategory
