// import { useEffect , useState } from 'react';
import './App.css';
import Albums from './Components/AlbumSlider/Albums';
import Cards from './Components/Genre/Cards';
import MusicPlayer from './Components/MusicPlayer/MusicPlayer';
import Nav from './Components/NavBar/Nav';
import SideBar from './Components/SideBar/SideBar';
import Songs from './Components/SongList/Songs';
import { Container }  from "./Components/Styled";


function App() {

  return (
    <div className="App">
      <Nav />
      <SideBar />
      <Container>
       
        <Cards />
        <Songs />
        <Albums />
      </Container>
      <MusicPlayer />
    </div>
  );
}

export default App;
