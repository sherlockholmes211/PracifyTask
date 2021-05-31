import React from 'react'
import {Nav,NavBtn,NavBtnlink,NavLink,NavMenu,NavTitle} from './NavElements'
import {BrowserRouter as Router} from 'react-router-dom';
import logo from '../../Assets/imgs/Group 220.png'
const NavBar = () => {
    return (
        <Router>
            <Nav>
            <NavMenu>
                <img style={{marginRight:"15px"}} alt="no text" src={logo}></img>
                <NavTitle>organic</NavTitle>
            </NavMenu>
                <NavMenu>
                    <NavLink to='/Market' activeStyle>Market</NavLink>
                    <NavLink to='/Portfolio' activeStyle>Portfolio</NavLink>
                    <NavLink to='/Withdraw' activeStyle>Withdraw</NavLink>
                    <NavLink to='/about' activeStyle>About</NavLink>
                    <NavLink to='/contact' activeStyle>Contact</NavLink>
                    <NavBtn>
                        <NavBtnlink to='/about' activeStyle>Login</NavBtnlink>
                    </NavBtn>
                </NavMenu>

            </Nav>
        </Router>
    )
}

export default NavBar;
