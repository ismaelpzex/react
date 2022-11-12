import { useEffect, useState } from "react";
import { getGifsByCategory } from "../helpers/getGifsByCategory";

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsloading] = useState(true);

    const getImages = async () => {
        const newImage = await getGifsByCategory(category);
        setImages(newImage);
        setIsloading(false);
    }

    useEffect(() => {
        getImages();
    }, [])
    return {
        images: images,
        isLoading: isLoading,
    }
}