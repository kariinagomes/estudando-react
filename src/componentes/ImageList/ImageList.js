import React from 'react';

import './ImageList.css'

const ImageList = (props) => {
    return(
        <div class="gallery-container">
            {props.children}
        </div>
    )
}

export default ImageList;
