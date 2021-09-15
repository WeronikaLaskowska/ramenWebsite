import styled from "styled-components";

export const ChefHeader = styled.h1`
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
export const ChefContainer= styled.div`

    height: 100%;
    width: 100%;
    padding:2rem 0rem;
    background-color: #070504;
    display:flex;
    flex-direction: column;

@media screen and (min-width:1000px){
    display:grid;
    grid-template-columns: 5fr 3fr;
    grid-gap:2rem;
    align-items: center;
    justify-content: center;

}

`

export const ChefImage = styled.img`
    width:100%;
    height:100%;
    margin: 50px 0;
    opacity:0.8;
    transition: .5s ;
    cursor: pointer;
    &:hover{
        opacity:1;
        transform: scale(1.2);
    }

    @media screen and (min-width:1000px){
        height:80%;
    }
    @media screen and (min-width:1400px){
        width:80%;
    }


`

export const ChefContent = styled.div`
color:white;
margin-left:20px;
    h1{
       font-size: 3rem;
       font-weight: 200;
       &::after{
            display:block;
            content: '';
            border-bottom: solid 3px #e31837;  
            transform: scaleX(0);  
            transition: transform 0.5s ease-in-out;
       }
       &:hover::after{
        transform: scaleX(1);
       }
    }
    h3{
        font-weight: 100;
        font-size: 1.5rem;
        padding:10px 0;
    }
    p{
        width: 80%;
        font-size: 1.3rem;
    }

    @media screen and (min-width:600px){
        h1{
            font-size:4rem;
        }
        h3{
            font-size:2.5rem;
        }
        p{
            font-size:1.7rem;
            font-weight: 100;
        }
    }
    @media screen and (min-width:1000px){
        h1{
            font-size:4rem;
        }
        h3{
            font-size:1.5rem;
        }
        p{
            font-size:1.3rem;
            font-weight: 100;
        }
    }
    @media screen and (min-width:1400px){
        h1{
            font-size:5rem;
        }
        h3{
            font-size:2.5rem;
        }
        p{
            font-size:1.7rem;
            font-weight: 100;
        }
    }

`