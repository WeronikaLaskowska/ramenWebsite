import styled from "styled-components";


export const FooterElement = styled.div`
    width:100vw;
    height: 50px;
    background-color: #000103;
    color:#fff;
    display: flex;
    justify-content: space-between;
    padding:5px 25px;
    font-size:1.2rem;
    position: fixed;
    bottom:0;
    background: transparent;
    cursor:pointer;
    svg{
        width: 30px;
        height: 30px;
        margin-right: 10px;
        transition: .3s;
        &:hover{
            transform:scale(1.2)
        }
    }
@media screen and (max-width:367px){
    font-size:.8rem;
    svg{
        width: 20px;
        height: 20px;
        margin-right: 10px;
        transition: .3s;
        &:hover{
            transform:scale(1.2)
        }
    }

}

`