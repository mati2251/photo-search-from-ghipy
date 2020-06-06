import React from "react";

export interface PhotoProps {
    src: string
}

const Photo = (props: PhotoProps) => {
    return(
        <div>
            <img src={props.src}/>
        </div>
    )
}

export default Photo;
