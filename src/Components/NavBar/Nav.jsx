import React from 'react'
import { Input, Navbar  } from './Styled';
import {Title} from '../Styled';
import './NavBar.scss';
import Auth from '../Login/Auth';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <Navbar>
      <Link to='/'>
        <Title align="left">Musicly</Title>
      </Link>
      <div className="search-bar">
        <Input placeholder="Enter Song/Album/Artist"></Input>
        <span className="icons search-btn">
          <i className="bi bi-search"></i>
        </span>
      </div>
      <div>
        <Auth />
      </div>
    </Navbar>
  );
}

export default Nav