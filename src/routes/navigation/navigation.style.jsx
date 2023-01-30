import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`
export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
  @media screen and (max-width: 600px) {
    display: none;
  }
`
export const NavLinksContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width: 600px) {
    width: 100vw !important;
  }
`

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  margin: 5px;
  @media screen and (max-width: 600px) {
    margin: 0 !important;
  }
`

export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  margin-right: 10px;
`

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 34px;
`


export const LightDarkModeIcon = styled.i`
  position: absolute;
  left: 4px;
  bottom: 5px;
  font-size: 1.4rem;
  color: white;
  -webkit-transition: .4s;
  transition: .4s;
  z-index: 2;
`


export const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${Slider} {
    background-color: #f321de;
  }

  &:focus + ${Slider} {
    box-shadow: 0 0 1px #f321de;
  }
  &:checked + ${Slider} ${LightDarkModeIcon} {
    position: absolute;
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
    left: 4px;
    bottom: 5px;
  }
`