import styled from "styled-components";

export const Detail = styled.div`
display:grid;
grid-template-columns:1fr 2fr;
justify-content:center;
justify-items:center;
align-items:center;
font-family: 'Courier New', Courier, monospace;
background:linear-gradient( #555459, #EF5350);
min-height:75vh;

;
div{
    gap:5%;
    justify-content:center;
}

tr{
    box-shadow: 1px 1px 1px 1px white;
    text-align:center;
color: white;
    &:hover {    
     transform:scale(1.1);
    
     }     
}
td{
    font-size:1.5em;
}
h2{
    color:white;
    text-align:center;
}
img{
    &:hover {    
     transform:scale(1.5);
    
     }
    width: 100%;
}
`
export const Main = styled.div`
display: flex;
`
export const Page = styled.div`
display:flex;
justify-content:center;
background-color:#EF5350;
padding:2%;
 
button{
    box-shadow:2px 2px 2px;
    font-size:1.5em;
    background-color:white;
    color:#EF5350;
    border:none;

    &:hover {    
     transform:scale(1.1);
     background-color:#EF5350;
     color:white;      
     }  

}
`
export const Error = styled.body`
background:linear-gradient( #555459, #EF5350);
display:grid;
justify-content:center;
height:100vh;
img{
padding:10%;
height:60%;
width:auto;
}

`

export const DetailPage = styled.div`
display:flex;
flex-direction: column;
justify-content:center;
background-color:#EF5350;
`