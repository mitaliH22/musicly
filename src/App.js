import './App.css';
import Albums from './Components/Albums';
import Cards from './Components/Cards';
import MusicPlayer from './Components/MusicPlayer/MusicPlayer';
import Nav from './Components/NavBar/Nav';
import SideBar from './Components/SideBar/SideBar';
import Songs from './Components/Songs';
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
