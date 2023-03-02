import React from "react";
import './SideBar.scss';
import {Sidebar , Options} from "./Styled"
function SideBar() {
  return (
    <Sidebar>
      <Options href="#">
        <span className="icons">
          <i class="bi bi-house-door-fill"></i>
        </span>
        Home
      </Options>
      <Options href="#">
        <span className="icons">
          <i class="bi bi-people-fill"></i>
        </span>
        Artists
      </Options>
      <Options href="#" className="option">
        <span className="icons">
          <i class="bi bi-music-note-list"></i>
        </span>
        Albums
      </Options>
      <Options href="#">
        <span className="icons">
          <i class="bi bi-bar-chart-fill"></i>
        </span>
        Trends
      </Options>
      <Options href="#">
        <span className="icons">
          <i class="bi bi-file-earmark-music-fill"></i>
        </span>
        Playlist
      </Options>
      <Options href="#">
        <span className="icons">
          <i class="bi bi-person-fill"></i>
        </span>
        Profile
      </Options>
    </Sidebar>
  );
}

export default SideBar;
