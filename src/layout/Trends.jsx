import React, { useEffect, useState } from 'react'
import Songs from '../Components/SongList/Songs';
import { Title } from '../Components/Styled';
import { getNewMusic } from '../spotify';
import Layout from './Layout'

function Trends() {
    const [songs , setSongs] = useState([]);

    useEffect(() =>{
        const fetchSongs = async() =>{
            try{
                const data = await getNewMusic();
                setSongs(data.data.albums.items);
            }catch(e){
                console.log(e);
            }
        }

        fetchSongs();
    },[])

  return (
    <Layout>
      <Title>Trends</Title>
      <div className="trends-page">
        <Songs songs={songs}/>
      </div>
    </Layout>
  );
}

export default Trends