import styled from "styled-components";

export const ReservationHeader = styled.h1`
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
export const ReservationLowerHeader = styled.h3`
background-color: #070504;
color:white;
padding:0 2rem;
font-weight: 100;
font-size:1.4rem;

`
export const ReservationContainer = styled.div`
    height: 100%;
    width: 100%;
    padding:2rem 1rem;
    background-color: #070504;
    display:flex;
    flex-direction: column;
    padding-top:100px;
   
    @media screen and (min-width:700px) {
        display:grid;
        grid-template-columns: 1fr 1fr;
        grid-gap:5rem;
        align-items: center;
        justify-content: center; 
        padding-left:70px;
    }

`
export const ReservationForm = styled.form`
   
    display: flex;
    flex-direction: column;
    align-items: flex-start;
   
`
export const ReservationLabel = styled.label`
    color:white;
    padding: 10px 0;
    font-size:1.2rem;
    @media screen and (min-width: 700px) {
        font-size:1.5rem;
    }
`
export const ReservationInput = styled.input`
    width: 80%;
    height: 30px;
    border-radius: 5%;
    border:none;
    max-width: 600px;
   
    &:last-of-type{
        margin-bottom: 20px;
    }
    &:focus{
        border:3px solid #e31837;
        outline:none;
    }
    @media screen and (min-width: 700px) {
        height:40px;
    }

`
export const SubmitButton = styled.a`

        text-decoration: none;
        color:#fff;
        padding:10px 15px;
        font-weight: bold;
        border:2px solid #fff;
        position: relative;
        overflow: hidden;
        transition: all 1s;    
        cursor: pointer;
        max-width: fit-content;
        &:hover{
            color:#0b0b0c;
            background-color: #fff;
        }
    
`
export const ReservationPicture = styled.img`
    width:100%;
    margin-bottom:100px ;
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