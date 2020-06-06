import React from "react";

export interface PhotoProps {
    src: string
}

const Photo = (props: PhotoProps) => {
    return (
        <img src={props.src} alt=""/>
    )
}

export default Photo;
