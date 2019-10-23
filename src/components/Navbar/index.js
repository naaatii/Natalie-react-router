import React from 'react'
import {Link,withRouter} from 'react-router-dom'
import { Container } from '../Navbar/styled'

const Navbar = (props) =>{
    return(
        <Container>
            <div>
                <Link to={'/'}>HOME</Link>
                <Link to={'/category/politica'}>Politica</Link>
                <Link to={'/category/internacionales'}>Internacionales</Link>
                <Link to={'/category/tecnologia'}>Tecnologia</Link>
                <Link to={'/category/espectaculos'}>Espectaculos</Link>
                <Link to={'/category/deportes'}>Deportes</Link>

                <input type='text' placeholder='Buscar' onKeyPress={(event)=>event.key === 'Enter' ? props.history.push(`/search/${event.target.value}`):null}

></input>
            </div>
        </Container>
    )
}

export default withRouter(Navbar);