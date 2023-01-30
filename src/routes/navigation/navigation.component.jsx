import { Outlet, useLocation } from "react-router-dom";
import { Fragment, useState, useEffect,useContext } from "react";

import CartIcon from "../../component/cart/cart.component";
import CartDropdown from "../../component/cart-dropdown/cart-dorpdown.component";

import { WebsiteThemeContext } from "../../component/context/theme-color.context";
import { UserContext } from "../../component/context/user.context";
import { SignOutUser } from "../../utils/firebase/firebase.utils";
import { CartDropdownContext } from "../../component/context/cart-dorpdown.context";

import {ReactComponent as Crown} from '../../assests/crown.svg';

import {NavigationContainer, LogoContainer, NavLinksContainer, NavLink, Switch, SwitchInput, Slider, LightDarkModeIcon} from './navigation.style';

const Navigation = () => {
    const [moonSunIcon, setMoonSunIcon] = useState('fa-sun');
    const [moonSunTranaction, setMoonSunTransaction] = useState('');
    
    const location = useLocation();
    const {pathname} = location;
    const {theme, setTheme} = useContext(WebsiteThemeContext);

    let borderColor = '';

    const {currentUser} = useContext(UserContext);
    const {isOpen} = useContext(CartDropdownContext);

    useEffect(() => {
      const currentTheme = localStorage.getItem("theme");
      if (currentTheme === "dark") {
        handleToggle();
        document.querySelector('input[type="checkbox"]').checked = true;
      }
    }, []);
    
    const handleToggle = () => {
      if (moonSunIcon === "fa-sun") {
        setMoonSunIcon("fa-moon");
        setMoonSunTransaction("fa-sun-checked");
        borderColor = 'rgb(255, 255, 255)';
        setTheme('dark')
      } else {
        setMoonSunIcon("fa-sun");
        setMoonSunTransaction("");
        borderColor = 'rgb(0, 0, 0)';
        setTheme('white')
      }
    };
    return (
      <Fragment>
        <NavigationContainer>
            <LogoContainer to='/'>
                <Crown className='logo'/>
            </LogoContainer>
            <NavLinksContainer>
              <NavLink to='/'  style={{'border': `${pathname === '/' ? `1px solid ${borderColor}`: 'none'}`, 'color': `${theme === 'dark' ? 'rgb(255, 255, 255)': 'rgb(0, 0, 0)'}`}}>
                HOME
              </NavLink>
                <NavLink to='/shop'  style={{'border': `${pathname === '/shop' ? `1px solid ${borderColor}`: 'none'}`, 'color': `${theme === 'dark' ? 'rgb(255, 255, 255)': 'rgb(0, 0, 0)'}`}}>
                    SHOP
                </NavLink>
                {
                currentUser ? (
                  <NavLink as='span' onClick={SignOutUser}>SIGN OUT</NavLink>
                ): (
                  <NavLink to='/authintaction' style={{'border': `${pathname === '/authintaction' ? `1px solid ${borderColor}`: 'none'}`, 'color': `${theme === 'dark' ? 'rgb(255, 255, 255)': 'rgb(0, 0, 0)'}`}}>
                    SING IN
                </NavLink>
                )
                }
                <Switch>
                  <SwitchInput type="checkbox" onClick={() => handleToggle()}/>
                  <Slider><LightDarkModeIcon className={`fa-solid ${moonSunIcon} ${moonSunTranaction}`}></LightDarkModeIcon></Slider>
                </Switch>
                <CartIcon />
            </NavLinksContainer>
            {
              isOpen === 'open' ? <CartDropdown />: null
            }
            
        </NavigationContainer>
        <Outlet/>
      </Fragment>
    );
  }

export default Navigation;