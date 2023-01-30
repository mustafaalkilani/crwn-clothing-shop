import styled from "styled-components";

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  @media screen and (max-width: 600px) {
    margin: 0;
    width: 90vw;
  }
`

export const H2 = styled.h2`
  margin: 10px 0;
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 600px) {
    justify-content: center;
  }
`