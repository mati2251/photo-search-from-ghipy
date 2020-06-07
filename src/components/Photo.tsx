import React from "react";
import "./Photo.css"

export interface PhotoProps {
    src: string,
    alt: string
}

const Photo = (props: PhotoProps) => {
    return (
        <div className="photo">
            <img src={props.src} alt={props.alt}/>
        </div>
    )
}

export default Photo;
