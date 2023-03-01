import React from 'react'
import { Input, Navbar , User  } from './Styled';
import {Title} from '../Styled';
import search from "../../assets/search.png";

function Nav() {
  return (
    <Navbar>
      <Title align="left">Musicly</Title>
      <div className="search-bar">
        <Input placeholder="Enter Song/Album/Artist"></Input>
        <img src={search} alt="icon" width="20px" height="20px" />
      </div>
      <div>
        <User>John Doe</User>
      </div>
    </Navbar>
  );
}

export default Nav