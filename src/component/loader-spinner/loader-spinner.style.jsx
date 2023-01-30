import styled from "styled-components";


export const LoaderContainer = styled.div`
    display: flex;
    height: 100vh !important;
    justify-content: center;
    align-items: center;
`

export const Loader = styled.div`
    position: fixed;
    top: 41%;
    border: 10px solid transparent;
    border-radius: 50%;
    border-top: 4px solid #011421;
    border-bottom: 4px solid #011421;
    width: 300px;
    height: 300px;
    -webkit-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;

    @-webkit-keyframes spin {
        0% { -webkit-transform: rotate(0deg); }
        100% { -webkit-transform: rotate(360deg); }
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`
