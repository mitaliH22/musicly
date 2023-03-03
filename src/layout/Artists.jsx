import React, { useEffect, useState } from 'react'
import Artist from '../Components/Artists/Artist';
import { searchArtist } from '../spotify';
import Layout from './Layout';

function Artists() {
    const [ artists , setArtists ] = useState([]);

    useEffect(() =>{
      const fetchArtist = async()=>{
        try{
          const { data } = await searchArtist(
            "2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6"
          );
          setArtists(data);
          console.log(data);
        } catch(e){
          console.log(e);
        }
      }
      fetchArtist();
    },[]);
  
    return (
      <Layout>
        <Artist artists={artists.artists} />
      </Layout>
    );
}

export default Artists