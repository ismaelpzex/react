const apiKey = 'rnvtu6pTEDD7UyD0ViLoexrmViKu0APx';

const http = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

http.then(response => response.json())
    .then(({ data }) => {
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    })
    .catch(console.warn);