import styled from "styled-components";

export const PaymentFormContainer = styled.div`
    height: 300px;
    display: flex;
    flex-direction: column;
    align-itmes: center;
    justify-content: center;
`

export const FormContainer = styled.form`
    height: 100px;
    min-width: 500px;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 600px) {
        min-width: auto;
        width: 95vw;
    }
`

export const H2 = styled.h2`
    text-transform: uppercase;
    font-family: monospace;
`