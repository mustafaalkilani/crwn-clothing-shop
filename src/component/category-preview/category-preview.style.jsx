import styled from "styled-components";

export const CategoryPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const CategoryTitleContainer = styled.h2`
    display: flex;
    justify-content: center;
    @media screen and (max-width: 600px) {
        width: 100%;
    }
`

export const CategoryTitle = styled.span`
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
    letter-spacing: 2.8rem;
    font-size: 3.6rem;
    color: rgb(51, 51, 51);
    user-select: none;
    cursor: pointer;
    @media screen and (max-width: 600px) {
        font-size: 1.6rem;
        letter-spacing: 1.6rem;
    }
`


export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 10px;
    row-gap: 50px;
    @media screen and (max-width: 600px) {
        grid-template-columns: repeat(1, 1fr);
        padding: 10px 20px;
    }
`