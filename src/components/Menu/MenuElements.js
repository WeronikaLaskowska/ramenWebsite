import styled from "styled-components";

export const MenuHeader = styled.h1`
background-color: #070504;
color:white;
padding:2rem;
font-weight: 100;
&::after{
            display:block;
            content: '';
            border-bottom: solid 3px #e31837;   
}



`
export const MenuContainer = styled.div`
    display:grid;
    height: 100%;
    width: 100%;
    grid-template-columns: 1fr;
    padding:2rem 1rem;
    background-color: #070504;
    align-items: center;
    justify-content: center;

     @media screen and (min-width:800px){
        padding-left:20%;
    } 
   @media screen and (min-width: 1200px){
       grid-template-columns: 1fr 1fr;
        padding-left:0; 
   }


`
export const MenuCard = styled.div`
position: relative;
margin:50px 20px;
width: 600px;
height: 300px;
display:flex;
align-items: center;
background: linear-gradient(45deg, #e31837, #d7b766 );
border-radius: 20px;
margin-left: 250px;
&:hover{
    img{
        opacity:0;
    }
    #content{
        opacity:1;
        left:5%;
    }
}
@media screen and (min-width:500px){
    margin-left:50px;
    &:hover{
    img{
        opacity:1;
        height: 100%;
        left:67%; 
    }
}
}
@media screen and (min-width:580px){
    &:hover{
    img{
        opacity:1;
        height: 100%;
        left:75%; 
    }

}

`
export const MenuCardContent = styled.div`
    position: relative;
    width:40%;
    left:20%;
    color:white;
    transition: 0.5s;
    opacity:0;
    h2{
        font-size:2rem;
        padding:10px 0;
        text-align: left;
    }
    p{
        opacity:0.7;
        font-size:1.1rem;
        line-height: 1.2rem;
        margin-bottom: 20px;
    }


`

export const MenuCardBtn = styled.a`
    text-decoration: none;
    color:#0b0b0c;
    padding:10px 15px;
    font-weight: bold;
    border:2px solid #0b0b0c;
    position: relative;
    overflow: hidden;
    transition: all 1s;    
    &:hover{
        color:#fff;
        background-color: #0b0b0c;
    }

`
export const MenuCardImg = styled.div`
img{
    position:absolute;
    bottom:0;
    left:25%;
    transform: translateX(-50%);
    height: 350px;
    transition:0.5s;
    cursor: pointer;

    @media screen and (min-width: 500px){
        left:50%;
        height: 400px;
    }
}
   

`