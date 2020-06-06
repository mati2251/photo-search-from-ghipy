import React from "react";
import "./Photo.css"

export interface PhotoProps {
    src: string,
    alt: string
}

const Photo = (props: PhotoProps) => {
    return (
        <img className="photo" src={props.src} alt={props.alt}/>
    )
}

export default Photo;
