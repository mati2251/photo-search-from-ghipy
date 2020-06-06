import React, {useState} from 'react';
import './App.css';
import {FiSearch} from "react-icons/all";
import Photo from "./components/Photo";

let query: string
const name = 'q'.replace(/[[\]]/g, '\\$&');
const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(window.location.search);
// @ts-ignore
if(!results && !results[2]){
    query = 'hello'
}
else {
    // @ts-ignore
    query = decodeURIComponent(results[2].replace(/\+/g, ' '))
}
const App = () => {
    const [isRendered, setIsRendered] = useState(false)
    const [photosJSX, setPhotos] = useState()
    const search = () => {
        if (!isRendered) {
            const req = new XMLHttpRequest();
            req.open('GET', `https://api.giphy.com/v1/gifs/search?api_key=sASnbfCxLNIckaGMW3jWggs2rp1UT7PY&q=${query}&limit=10`, false);
            req.send(null);
            if (req.status === 200) {
                const images = JSON.parse(req.responseText)
                let photos: Array<any> = []
                images.data.map((item: any) => {
                    photos.push(<Photo src={item.images.original.url} key={item.slug} alt={item.title}/>)
                })
                setPhotos(photos)
                setIsRendered(true)
                req.abort()
            }
        }
    }

    search()

    const searchHandlerInput = (event: any) => {
        query = event.target.value
    }

    const searchHandlerButton = () => {
        if (window.history.pushState) {
            const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?q=' + query;
            window.history.pushState({path: newUrl}, '', newUrl);
            setIsRendered(false)
            search()
        }
    }

    return (
        <div className="App">
            <h1>PHOTO SEARCH FROM GIPHY</h1>
            {photosJSX.length === 0 ? <h2>Not found results for sentence: {query}</h2> : <h2>Results for sentence: {query}</h2>}
            <div className="options">
                <input type="text" placeholder="Insert text" onChange={searchHandlerInput}/>
                <button onClick={searchHandlerButton}><FiSearch className="icon"/></button>
            </div>
            <div className="photoContainer">
            {photosJSX}
            </div>
        </div>
    );
}

export default App;
