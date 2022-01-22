import { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'
import PropTypes from 'prop-types'

const GifExpertApp = ({ defaultCategories = [] }) => {
    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball']
    const [categories, setCategories] = useState(defaultCategories)
    const handleAdd = categorie => {
        setCategories([categorie, ...categories])
    }

    return (
        <div>
            <h2>GifExpertApp</h2>
            <hr />
            <AddCategory addCategory={handleAdd} />
            <ol>
                {categories.map(category => (
                    <GifGrid category={category} key={category} />
                ))}
            </ol>
        </div>
    )
}
GifExpertApp.propTypes = {
    defaultCategories: PropTypes.arrayOf(PropTypes.string),
}
export default GifExpertApp
