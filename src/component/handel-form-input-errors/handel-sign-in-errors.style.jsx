import styled from "styled-components";


export const ErrorMsg = styled.p`
    text-transform: uppercase;
    letter-spacing: 0.7rem;
    font-size: .9rem;
    color: rgb(230, 6, 6);
    font-weight: bold;
    position: absolute;
    top: 87px;
    @media screen and (max-width: 600px) {
        letter-spacing: 0.2rem;
        font-size: .8rem;
    }
`