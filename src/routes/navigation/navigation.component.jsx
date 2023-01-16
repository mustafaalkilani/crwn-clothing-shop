import { Outlet, Link, useLocation } from "react-router-dom";
import { Fragment, useState, useEffect } from "react";

import {ReactComponent as Crown} from '../../assests/crown.svg';
import './navigation.style.scss';

const Navigation = () => {
    const [moonSunIcon, setMoonSunIcon] = useState('fa-sun');
    const [moonSunTranaction, setMoonSunTransaction] = useState('');
    
    const location = useLocation();
    const {pathname} = location;

    let borderColor = '';

    useEffect(() => {
      const currentTheme = localStorage.getItem("theme");
      if (currentTheme === "black") {
        handleToggle();
        document.querySelector('input[type="checkbox"]').checked = true;
      }
    }, []);
  
    useEffect(() => {
      if(location.pathname === '/' && document.body.style.color === "rgb(255, 255, 255)") {
          document.querySelectorAll('.category-body-container').forEach(containerBody => {
          containerBody.style.backgroundColor = 'rgb(0, 0, 0)';
          containerBody.style.color = 'rgb(255, 255, 255)';
        });
      }
    }, [location]);

    const handleToggle = () => {
      if (moonSunIcon === "fa-sun") {
        setMoonSunIcon("fa-moon");
        setMoonSunTransaction("fa-sun-checked");
        document.body.style.backgroundColor = "rgb(33, 33, 33)";
        if (document.querySelectorAll('.category-body-container')) {
            document.body.style.color = "rgb(255, 255, 255)";
            document.querySelectorAll('.category-body-container').forEach(containerBody => {
            containerBody.style.backgroundColor = 'rgb(0, 0, 0)';
            containerBody.style.color = 'rgb(255, 255, 255)';
          });
        }
        document.querySelectorAll(".nav-link").forEach(link => {
        link.style.color = "rgb(255, 255, 255)";
        });
        borderColor = 'rgb(255, 255, 255)'
        localStorage.setItem("theme", "black");
      } else {
        setMoonSunIcon("fa-sun");
        setMoonSunTransaction("");
        document.body.style.backgroundColor = "whitesmoke";
        if (document.querySelectorAll('.category-body-container')) {
            document.body.style.color = "rgb(0, 0, 0)";
            document.querySelectorAll('.category-body-container').forEach(containerBody => {
            containerBody.style.backgroundColor = 'rgb(255, 255, 255)';
            containerBody.style.color = 'rgb(0, 0, 0)';
          });
        }
        document.querySelectorAll(".nav-link").forEach(link => {
        link.style.color = "rgb(0, 0, 0)";
        });
        borderColor = 'rgb(0, 0, 0)'
        localStorage.setItem("theme", "white");
      }
    };

    return (
      <Fragment>
        <div className="navigation">
            <Link className="logo-container" to='/'>
                <Crown className='logo'/>
            </Link>
            <div className="nav-links-container">
                <Link className='nav-link' to='/shop' style={pathname === '/shop' ? {'border' : `1px solid ${borderColor}`}: {'border': 'none'}}>
                    SHOP
                </Link>
                <Link className='nav-link' to='/sign-in' style={pathname === '/sign-in' ? {'border': `1px solid ${borderColor}`}: {'border': 'none'}}>
                    SING IN
                </Link>
                <label className="switch">
                  <input type="checkbox" onClick={() => handleToggle()}/>
                  <span className="slider round"><i className={`fa-solid ${moonSunIcon} ${moonSunTranaction}`}></i></span>
                </label>
            </div>
        </div>
        <Outlet/>
      </Fragment>
    );
  }

export default Navigation;