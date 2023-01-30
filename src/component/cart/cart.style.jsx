import styled from "styled-components";

import {ReactComponent as ShoppingIcon} from '../../assests/shopping-bag.svg';
import {ReactComponent as ShoppingIconDarkOne} from '../../assests/shopping-bag-dark.svg';

export const CartIconContainer = styled.div`
    width: 45px;
    height: 45px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    user-select: none;
`

export const ShoppingIconEle = styled(ShoppingIcon)`
      width: 24px;
      height: 24px;
`

export const ShoppingIconDarkOneEle = styled(ShoppingIconDarkOne)`
      width: 24px;
      height: 24px;
`

export const ItemCount = styled.span`
    position: absolute;
    font-size: 10px;
    font-weight: bold;
    bottom: 12px;
`