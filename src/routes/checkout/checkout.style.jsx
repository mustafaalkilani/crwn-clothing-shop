import styled from "styled-components";


export const CheckOutContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  @media screen and (max-width:600px) {
    width: 100vw;
    margin: 50px auto 10px;  
  }
`
export const CheckOutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
  @media screen and (max-width:600px) {
    width: 95%;
  }
`

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;
  &:last-child {
  width: 8%;
  }
  @media screen and (max-width:600px) {
    margin-right: 5px;
    width: auto;
    &:last-child {
        margin-right: 0;
        width: auto;
    }
  }
`
export const Total = styled.span `
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`
