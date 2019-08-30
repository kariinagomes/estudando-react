import React from 'react';
import filme1 from '../../imgs/filme1.jpg'

import './ImageList.css'

const ImageList = () => {
    return(
        <div class="gallery-container">
            <div>
                <img src={filme1} alt="capa filme 1" />
                <div class="img-legend">
                    <div class="text-legend">
                    <h4>Nome do filme</h4>
                    <h6>qualquer coisa escrita aqui só pra ocupar espaço</h6>  
                    </div>
                    <div class="more-details">
                    <button>
                        <span>+</span>
                    </button>
                    </div>
                </div>    
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