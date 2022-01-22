
const url = process.env.REACT_APP_GIF_API_URL

export const getGifs = async (category, limit = 10) => {
    const resp = await fetch(`${url}${encodeURI(category)}&limit=${limit}`)
    const { meta, data } = await resp.json()
    if (meta.status === 200) {
        const gifs = data.map(img => ({
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,
        }))
        return gifs
    }
    return []
}