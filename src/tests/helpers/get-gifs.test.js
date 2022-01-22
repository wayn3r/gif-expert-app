import { getGifs } from "../../helpers";

describe('Pruebas en get-gifs', () => {
    test('debe traer 10 elementos', async() => {
        const category = 'One Punch';
        const gifs = await getGifs(category)
        expect(gifs).toHaveLength(10);
    })
    test('debe traer 10 elementos', async() => {
        const category = '';
        const gifs = await getGifs(category)
        expect(gifs).toHaveLength(0);
    })
})
