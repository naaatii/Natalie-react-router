import React from 'react'
import {Container} from './styled'
import Card from '../Card';


const Grilla = ({news}) => {

    const destacadas= news.slice(10,12);
   return(
       <Container>
           <div className="notasDestacadas">
            {destacadas.map(noticia => <Card noticia={noticia} key={noticia._id} />)}
           </div>
           <div className="notasGrilla">
                {news.map(noticia => <Card noticia={noticia} key={noticia._id} />)}
            </div>
       </Container>
   )
}
export default Grilla