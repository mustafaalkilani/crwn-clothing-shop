import styled from "styled-components";
import Button from "../button/button.component";

export const CartDropDwonContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  top: 90px;
  right: 40px;
  z-index: 5;
  user-select: none;
`

export const CartItemsEl = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 5px;
  } 
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 20px;
  }
`
export const NoItemsInCartItemsEl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 240px;
`

export const CheckOutButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`