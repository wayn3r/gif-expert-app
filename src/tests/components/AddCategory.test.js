import { shallow } from 'enzyme'
import AddCategory from '../../components/AddCategory'

describe('Pruebas en el archivo AddCategory ', () => {
    const addCategory = jest.fn()
    const preventDefault = () => {}
    let wrapper = shallow(<AddCategory addCategory={addCategory} />)

    beforeEach(() => {
        jest.clearAllMocks()
        wrapper = shallow(<AddCategory addCategory={addCategory} />)
    })

    test('debe mostrar el componente correctamente ', () => {
        expect(wrapper).toMatchSnapshot()
    })
    test('debe de cambiar el input text', () => {
        const value = 'Hola mundo'
        const input = wrapper.find('input')
        input.simulate('change', { target: { value } })
        // console.log(input.prop('value'))
        // expect(input.prop('value')).toBe(value)
    })
    test('no debe de postear la informacion con submit', () => {
        const form = wrapper.find('form')
        form.simulate('submit', { preventDefault })

        expect(addCategory).not.toHaveBeenCalled()
    })

    test('debe de llamar el addCategory y limpiar la caja de texto', () => {
        // simular el inputChange
        const value = 'Hola mundo'
        const input = wrapper.find('input')
        input.simulate('change', { target: { value } })
        // simular el submit
        const form = wrapper.find('form')
        form.simulate('submit', { preventDefault })
        // addCategory debe de ser llamado
        expect(addCategory).toHaveBeenCalledWith(value)
        // input debe de estar en blanco
        expect(input.prop('value')).toBe('')
    })
})
