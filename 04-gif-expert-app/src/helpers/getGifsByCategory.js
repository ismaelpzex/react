export const getGifsByCategory = async (category) => {
    const apiKey = 'rnvtu6pTEDD7UyD0ViLoexrmViKu0APx'
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=20`
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(value => ({
        id: value.id,
        title: value.title,
        url: value.images.downsized_medium.url
    }))

    return gifs
}
