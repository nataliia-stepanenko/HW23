import { useState, useEffect } from "react";

const ImagesList = () => {
    const [page, setPage] = useState(1);
    const [photos, setPhotos] = useState([]);
    
    useEffect(() => {
        fetch('https://picsum.photos/v2/list?page={page}&limit=10')
            .then((response) => response.json())
            .then((result) => {
                setPhotos(result)
            })
    }, [page]);

    const handleShowMore = () => {
        setPage(prevPage => prevPage + 1);
    }

    return (
        <>
            <h3>Image Gallery</h3>
            <ul>
                {photos.map(({id, download_url}) => (
                    <li key={id}>
                    <img src={download_url} alt={id} className="image"></img>
                    </li>
                ))}
            </ul>
            <button onClick={handleShowMore}>Show more</button>
        </>
    )
}

export default ImagesList;