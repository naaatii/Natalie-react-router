import styled from 'styled-components'

const Container = styled.nav `
    display: flex;
    align-items:center;
    justify-content:space-between;
    padding: 2% 5%;
    background-color: #FFDD9E;

    div{
        display: flex;
    }

    a{
        text-decoration: none;
        color: #525252;
        padding-right: 30px;
        font-size: 1.2em;
        font-weight: bold;
    }

    a:hover{
        color: orange;
    }
    
    input{
        padding: 1%;
        border: none;
        border-radius: 50px;
        padding-right: 15%;
    }

    input:focus{
        outline: none;
    }
        
`

export {Container}