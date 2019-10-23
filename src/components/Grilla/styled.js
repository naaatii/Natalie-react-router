import styled from 'styled-components'

const Container = styled.nav `
   .notasGrilla{
      display: grid;
      grid-template-columns: repeat(4,1fr);
      column-gap: 20px;
      row-gap: 1em;
      margin-left: 5%;
      margin-right: 5%;
      margin-top: 5%;
   }

   .notasDestacadas{
      display: grid;
      grid-template-columns: repeat(2,1fr);
      column-gap: 20px;
      row-gap: 1em;
      margin-left: 5%;
      margin-right: 5%;
      margin-top: 5%;
   }

   .notasDestacadas img{
      width: 95%;
      height: 200px;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      margin-bottom: -5px;
   }

   .notasDestacadas .info{
      width: 85.4%;
      height: 150px;
      padding: 40px;
      background-color: white;
      color: #000000;
      margin-bottom: 10%;
      box-shadow: 1px 5px 12px grey;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;

  }

  .notasDestacadas .info:hover{
      opacity: 0.7;
      color: #e47e00;
  }

  .notasDestacadas a{
      text-decoration: none;
  }

`

export {Container}