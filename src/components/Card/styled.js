import styled from 'styled-components'

const Container = styled.div `

    img{
        width: 89.5%;
        height: 200px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        margin-bottom: -5px;
    }

    .info{
        width: 70%;
        height: 150px;
        padding: 40px;
        background-color: white;
        color: #000000;
        margin-bottom: 10%;
        box-shadow: 1px 5px 12px grey;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;

    }

    .info:hover{
        opacity: 0.7;
        color: #e47e00;
    }

    a{
        text-decoration: none;
    }
`

export {Container}