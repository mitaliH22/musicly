import React from 'react'
import { Input, Navbar  } from './Styled';
import {Title} from '../Styled';
import './NavBar.scss';
import Auth from '../Login/Auth';

function Nav() {
  return (
    <Navbar>
      <Title align="left">Musicly</Title>
      <div className="search-bar">
        <Input placeholder="Enter Song/Album/Artist"></Input>
        <span className="icons search-btn">
          <i class="bi bi-search"></i>
        </span>
      </div>
      <div>
        <Auth />
      </div>
    </Navbar>
  );
}

export default Nav