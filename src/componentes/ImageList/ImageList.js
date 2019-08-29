import React from 'react';

import ImageItem from '../ImageItem/ImageItem.js';

import image1 from '../../imgs/filme1.jpg'

import './ImageList.css'

const ImageList = () => {
    return(
        <div class="gallery-container">
            <div>
                <img src={image1} alt="Primeira imagem"/>
                {/* <div></div> */}
            </div>            
        </div>
    )
}

export default ImageList;

// const ImageList = props => {
    
//     const { data = [] } = props;

//     const gerarItens = () => {
//         return data.map(dataItem => <ImageItem>{dataItem}</ImageItem>);
//     }

//     return <ul>{gerarItens()}</ul>
// };

// export default ImageList;