import React from 'react'
import {Container} from './styled'


//import fotoDali from '../../assets/dalicabeza.jpg'
//<img src={} /> PONER EN LINEA 10 , EN CONTAINER

const Card =  ({noticia}) => {
    
    const {title,img_url,source_name, url} = noticia
    return(
        <Container>
            <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={img_url}/>
            <div className="info">
                <h3>{title}</h3>
                <p>{source_name.substring(0,120)}</p>
            </div>
            </a>
        </Container>
    )
}

export default Card