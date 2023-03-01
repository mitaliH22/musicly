import React from "react";
import styled from "styled-components";

function SideBar() {
  const Sidebar = styled.ul`
    text-align: left;
    width: 150px;
    font-family: "Mukta", sans-serif;
    margin: 0;
    position: absolute;
    left: 0;
    z-index: 1;
  `;

  const Options = styled.li`
    color: white;
    list-style-type: none;
    font-family: "Mukta", sans-serif;
    font-size: 20px;
    padding: 10px 0;
    position: ${(props) => props.position || "block"};
    z-index: 9;
    background: ${((props) => props.background) || "none"};
  `;
  return (
    <Sidebar>
      <Options>Home</Options>
      <Options>Artists</Options>
      <Options>Albums</Options>
      <Options>Trends</Options>
      <Options>Playlist</Options>
      <Options>Profile</Options>
    </Sidebar>
  );
}

export default SideBar;
