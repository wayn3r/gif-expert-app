import { useEffect, useState } from 'react'
import { getGifs } from '../helpers'

export const useFetchGifs = category => {
    const [state, setState] = useState({ gifs: [], loading: true })
    useEffect(() => {
        setState(({ gifs }) => ({ loading: true, gifs }))
        getGifs(category).then(gifs => setState({ loading: false, gifs }))
    }, [category])
    return state
}
