import React, {useState} from 'react';
import './App.css';
import {FiSearch} from "react-icons/all";
import Photo from "./components/Photo";

let query: string = 'hello'

const App = () => {
    const [isRendered, setIsRendered] = useState(false)
    const [photosJSX, setPhotos] = useState()

    const search = () => {
        if (!isRendered) {
            const req = new XMLHttpRequest();
            req.open('GET', `https://api.giphy.com/v1/gifs/search?api_key=sASnbfCxLNIckaGMW3jWggs2rp1UT7PY&q=${query}&limit=10`, false);
            console.log(query)
            console.log(`https://api.giphy.com/v1/gifs/search?api_key=sASnbfCxLNIckaGMW3jWggs2rp1UT7PY&q=${query}&limit=10`)
            req.send(null);
            if (req.status === 200) {
                const images = JSON.parse(req.responseText)
                let photos: Array<any> = []
                images.data.map((item: any) => {
                    photos.push(<Photo src={item.images.original.url} key={item.embed_url}/>)
                })
                console.log("nowe")
                setPhotos(photos)
                setIsRendered(true)
                req.abort()
            }
        }
    }

    search()

    const searchHandler = (event: any) => {
        console.log(query)
        query = event.target.value
    }

    return (
        <div className="App">
            <h1>PHOTO SEARCH FROM GIPHY</h1>
            <div className="options">
                <input type="text" placeholder="Insert text" onChange={searchHandler}/>
                <button onClick={() => {
                    setIsRendered(false)
                    search()
                }}><FiSearch className="icon"/></button>
            </div>
            {photosJSX}
        </div>
    );
}

export default App;
