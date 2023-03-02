import React, { useEffect, useState } from 'react'
import { Title } from '../Styled';
import { getCurrentUserProfile } from "../../spotify.js";


function Login() {
    const CLIENT_ID = "f32d7d685abd4624a20f043150dee8fa";
    const REDIRECT_URI = "http://localhost:3000";
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
    const RESPONSE_TYPE = "token";

    const [ token , setToken] = useState('');
    const [profile, setProfile] = useState("");

    useEffect(() =>{
      const hash = window.location.hash;
      let token = window.localStorage.getItem("token");

      if (!token && hash) {
        token = hash
          .substring(1)
          .split("&")
          .find((elem) => elem.startsWith("access_token"))
          .split("=")[1];

        window.location.hash = "";
        window.localStorage.setItem("token", token);
      }

      setToken(token);
      

    } , []);


    useEffect(() =>{
      const fetchData = async () => {
        try {
          const { data } = await getCurrentUserProfile();
          setProfile(data);
          console.log(data);
          console.log(profile, "profile");
        } catch (e) {
          console.error(e);
        }
      };
      fetchData();
    },[token])

    const logout = () => {
      setToken("");
      window.localStorage.removeItem("token");
    };
  return (
    <div>
      
      <Title>
        {!token ? 
        <a
          href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
        className='login'>
          Login to Spotify
        </a> : <Title onClick={logout}>Logout</Title>
        }
      </Title>
    </div>
  );
}

export default Login