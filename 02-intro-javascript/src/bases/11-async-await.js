const getImagen = async () => {
    try {
        const apiKey = 'rnvtu6pTEDD7UyD0ViLoexrmViKu0APx';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const data = await resp.json();
        const { url } = data.data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (err) {
        console.error(err.message)
    }
}

getImagen();

// const apiKey = 'rnvtu6pTEDD7UyD0ViLoexrmViKu0APx';

// const http = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// http.then(response => response.json())
//     .then(({ data }) => {
//         const { url } = data.images.original;
//         const img = document.createElement('img');
//         img.src = url;
//         document.body.append(img);
//     })
//     .catch(console.warn);