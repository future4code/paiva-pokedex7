import styled from "styled-components";

export const Detail = styled.div`
display:grid;
grid-template-columns:1fr 4fr;
justify-content:space-around;
justify-items:center;
align-items:center;
font-family: 'Courier New', Courier, monospace;
background:linear-gradient( #F2CF1E,#2C57AA);
min-height:75vh;
width: 100vw;
;

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