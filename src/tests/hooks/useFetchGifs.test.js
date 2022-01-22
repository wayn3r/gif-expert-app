import { renderHook } from '@testing-library/react-hooks'
import { useFetchGifs } from '../../hooks'

describe('Pruebas en el useFetchGifs', () => {
    test('debe de retornar el estado inicial', async () => {
        const { result, waitForNextUpdate } = renderHook(() =>
            useFetchGifs('Naruto')
        )
        const { loading, gifs } = result.current
        await waitForNextUpdate()

        expect(loading).toBe(true)
        expect(gifs).toEqual([])
    })
    test('debe de retornar un arreglo de imgs y el loading en false', async () => {
        const { result, waitForNextUpdate } = renderHook(() =>
            useFetchGifs('Naruto')
        )
        await waitForNextUpdate()

        const { loading, gifs } = result.current
        expect(loading).toBe(false)
        expect(gifs.length).toBe(10)
    })
})
