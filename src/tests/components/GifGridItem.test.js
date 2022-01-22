import { shallow } from 'enzyme'
import GifGridItem from '../../components/GifGridItem'

describe('Pruebas para <GifGridItem />', () => {
    const title = 'Titulo del GIF'
    const url = 'https://localhost/algo.jpg'
    const wrapper = shallow(<GifGridItem title={title} url={url} />)

    test('debe mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot()
    })
    test('debe de tener un parrafo con el titulo', () => {
        const p = wrapper.find('p').text()
        expect(p).toBe(title)
    })
    test('debe de tener la imagen con url y alt de los props', () => {
        const img = wrapper.find('img').props()
        expect(img.src).toBe(url)
        expect(img.alt).toBe(title)
    })

    test('debe de tener la clase animate__animated', () => {
        const div = wrapper.find('div')
        // div.prop('className').includes('animate__animated')
        expect(div.hasClass('animate__animated')).toBe(true)
    })
})
