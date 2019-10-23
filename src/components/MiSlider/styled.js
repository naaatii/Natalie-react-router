import styled from 'styled-components'

const Container = styled.div `

        .divSlider{
            overflow:hidden;
            height: 700px;
            position: relative;
            
        }

        .fotoSlider{
            width:100%;
        }

        .tituloSlider{
            padding: 2%;
            position: absolute;
            left: 0%;
            top: 80%;
            z-index: 1;
            color: white;
            font-size: 2em;
            font-weight: bold;
            background-color: black;
            width: 100%;
            height: 200px;
            opacity: 0.8;
        }
`

export {Container}