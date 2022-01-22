import { useFetchGifs } from '../hooks'
import GifGridItem from './GifGridItem'
import PropTypes from 'prop-types'
const GifGrid = ({ category }) => {
    const { gifs, loading } = useFetchGifs(category)

    return (
        <div className="card-grid">
            <h3 className="card-title animate__animated animate__fadeIn">
                {category}
            </h3>
            {loading ? (
                <p className="animate__animated animate__flash">Cargando...</p>
            ) : (
                gifs.map(({ id, ...img }) => <GifGridItem key={id} {...img} />)
            )}
        </div>
    )
}
GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}
export default GifGrid
