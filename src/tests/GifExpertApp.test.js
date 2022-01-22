import { shallow } from 'enzyme'
import GifExpertApp from '../GifExpertApp'

describe('Pruebas para el componente <GifExpertApp />', () => {
    const wrapper = shallow(<GifExpertApp />)
    test('debe de mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot()
    })
    test('debe de mostrar una lista de categorias', () => {
        const categories = ['One Punch', 'Dragon Ball']
        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />)
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('GifGrid').length).toBe(categories.length)
    })
})
