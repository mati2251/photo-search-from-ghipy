import React, {useEffect, useState} from 'react';
import './App.css';
import {FiSearch} from "react-icons/all";
import Photo from "./components/Photo";

const App = () => {
    const [isRendered, setIsRendered] = useState(false)
    const [photosJSX, setPhotos] = useState()

    if (!isRendered) {
        const req = new XMLHttpRequest();
        req.open('GET', 'https://api.giphy.com/v1/gifs/search?api_key=sASnbfCxLNIckaGMW3jWggs2rp1UT7PY&q=random&limit=10', false);
        req.send(null);
        if (req.status === 200) {
            const images = JSON.parse(req.responseText)
            let photos: Array<any> = []
            images.data.map((item: any) => {
                console.log(item)
                photos.push(<Photo src={item.images.original.url} key={item.embed_url}/>)
            })
            setPhotos(photos)
            setIsRendered(true)
        }
    }

    return (
        <div className="App">
            <h1>PHOTO SEARCH FROM GIPHY</h1>
            <div className="options">
                <input type="text" placeholder="Insert text"/>
                <button><FiSearch className="icon"/></button>
            </div>
            {photosJSX}
        </div>
    );
}

export default App;
