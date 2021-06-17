
import styled, { keyframes } from "styled-components";

export const Head = styled.div`
display:flex;
background:linear-gradient(#EF5350,#555459);
justify-content:space-around;
align-items:center;
height:10vh;
color:white;
font-family: 'Courier New', Courier, monospace;
div{
    display:flex;
}
h1{
    font-size: 3em;
}
`
export const AllCards = styled.main`
display:flex;
flex-wrap: wrap;
gap:2% ;
justify-content: center;
justify-items: center;
padding: 30px;
background:linear-gradient( #555459, #EF5350);
min-height: 70vh;
font-family: 'Courier New', Courier, monospace;
animation: colors 15s easy;

@keyframes colors {
    0%{
        background-position: 0% 50%;
    }
    50%{
        background-position: 100% 50%;
    }
    100%{
        background-position: 0% 50%;
    }
}
`
export const Card = styled.div`
padding: 10px;
border-radius: 16px;
color:white;
margin:2%;
display: flex;
flex-direction: column;
background:transparent;
height: 400px;
width: 300px;
box-shadow:2px 2px 2px 2px white;
font-family: 'Courier New', Courier, monospace;
div{
display: flex;
justify-content:space-around;
font-family: 'Courier New', Courier, monospace;
}
img{
    height:50%;
    width:auto;  
 }
h1{
    text-align:center;
}
&:hover {    
     transform:scale(1.1);
    
     }     
`
export const Foot = styled.footer`
display:flex;
flex-direction:column;
text-align:center;
color:white;
font-family: 'Courier New', Courier, monospace;
line-height: 0;
height:15vh;
padding-top: 1%;;
background-color:#EF5350;
border-top: 2px solid white;

`
