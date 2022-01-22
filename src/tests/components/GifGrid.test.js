import { shallow } from 'enzyme'
import GifGrid from '../../components/GifGrid'
import { useFetchGifs } from '../../hooks/useFetchGifs'
jest.mock('../../hooks/useFetchGifs')

describe('Pruebas al componente <GifGrid />', () => {
    const category = 'Naruto'
    useFetchGifs.mockReturnValue({
        gifs: [],
        loading: true,
    })
    const wrapper = shallow(<GifGrid category={category} />)
    test('debe cargar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot()
    })
    test('debe mostrar items cuando se carga las imagenes', () => {
        const gifs = [
            {
                id: 'id de la imagen',
                title: 'title de la image',
                url: 'downsized_medium url de la imagen',
            },
            {
                id: 'id de la imagen 2',
                title: 'title de la image',
                url: 'downsized_medium url de la imagen',
            },
        ]
        useFetchGifs.mockReturnValue({
            gifs,
            loading: false,
        })
        const wrapper = shallow(<GifGrid category={category} />)
        expect(wrapper.find('p').exists()).toBe(false)
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length)
    })
})
