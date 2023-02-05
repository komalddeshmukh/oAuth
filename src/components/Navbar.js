import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from '../assets/styles/Button';

const Navbar = () => 
{
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

    const Nav = styled.nav`
    .navbar-list{
        display: flex;
        gap:4.8rem;

        li{
            list-style:none;

            .navbar-link{
                &:link,
          &:visited {
            display: inline-block;
            text-decoration: none;
            font-size: 1.8rem;
            text-transform: uppercase;
            color: ${({ theme }) => theme.colors.black};
            transition: color 0.3s linear;
            }
            &:hover,
          &:active {
            color: ${({ theme }) => theme.colors.helper};
          }
        }
    }
    }
    `
  
  return (
    <Nav>
        <div className="menuIcon">
     <ul className="navbar-list">
    <li>
        <NavLink className="navbar-link" to="/">Home</NavLink>
    </li>
    <li>
        <NavLink className="navbar-link" to="/about">About</NavLink>
    </li>
    <li>
        <NavLink className="navbar-link" to="/service">Services</NavLink>
    </li>
    <li>
        <NavLink className="navbar-link" to="/contact">Contact</NavLink>
    </li>
    <li>
    {isAuthenticated && (
            <li>
              <p> {user.name} </p>
            </li>
          )}
    </li>
    {
      isAuthenticated ?(
        <li>
    <Button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </Button>
    </li>
      ):(
        <li>
        <Button onClick={() => loginWithRedirect()}>Log In</Button>;
        </li>
      )
    }

</ul>
        </div>
    </Nav>
  );
  
}

export default Navbar
