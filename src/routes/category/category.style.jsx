import styled from "styled-components";

export const ContentCatgoryContainer = styled.div`
    padding: 0px 100px;
    margin-top: 50px;
    @media screen and (max-width: 600px) {
        padding: 0;
    }
`
export const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
`
export const CategoryTitle = styled.h2`
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
    letter-spacing: 2.8rem;
    font-size: 3.6rem;
    user-select: none;
    text-align: center;
    @media screen and (max-width: 600px) {
        font-size: 1.6rem;
        letter-spacing: 1.6rem;
    }
`

export const CategoryContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 10px;
    row-gap: 50px;
    @media screen and (max-width: 600px) {
        grid-template-columns: repeat(1, 1fr);
        padding: 10px 20px;
    }
`