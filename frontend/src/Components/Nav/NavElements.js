import styled from 'styled-components';
import {NavLink as  Link } from 'react-router-dom'

export const Nav = styled.div`
    background-color:#f4f4f4;
    /* padding:0.5rem calc((100vw - 1300px)/2); */
    height:72px;
    display:flex;
    width:auto;
    justify-content:space-between;
    align-items:center;
    box-sizing:border-box;
    background-color: transparent;
`

export const NavMenu = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    outline: none;
    border: none;
`

export const NavTitle = styled.div`
    outline: none;
    border: none;
    font-family: LibreBaskerville;
    font-size: 42px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
    text-align: left;
    color: #374b5c;
`

export const NavLink = styled(Link)`
    color:black;
    //background-color:green;
    margin:0 20px;
    padding:4px;
    text-decoration: none;
    font-family: LibreBaskerville;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.31;
    letter-spacing: normal;
    text-align: left;
    color: #374b5c;
    background: linear-gradient(rgb(0, 199, 149) ,rgb(0, 199, 149)) var(--p, 0) 100% /var(--d, 0) 3px no-repeat;
    transition: 0.3s, background-position 0s 0.3s;
    &:hover {
        --d: 100%;
        --p: 100%;
    }

`
export const NavBtn = styled.div`
    display:flex;
    padding: 12px 48px 13px 38px;
    border-radius: 10px;
    border: solid 2px #00dbd0;
    justify-content:center;
    outline: none;
`

export const NavBtnlink = styled(Link)`
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.31;
    letter-spacing: normal;
    text-align: left;
    color: #374b5c;
    outline: none;
    text-decoration: none;

`