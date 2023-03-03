import React , {useEffect , useState} from 'react'
import Layout from './Layout'
import { getCurrentUserProfile } from "../spotify";
import { Title } from '../Components/Styled';


function User() {
    const [profile, setProfile] = useState("");
    let token = window.localStorage.getItem("token");

        useEffect(() => {
          const fetchData = async () => {
            try {
              const { data } = await getCurrentUserProfile();
              setProfile(data);
              console.log(data );
              console.log(profile, "profile");
            } catch (e) {
              console.error(e);
            }
          };
          fetchData();
        });
  return (
    <Layout>
      <Title>
        {profile.display_name}
      </Title>
      
      {/* <img src={profile.images[0].url} alt="" /> */}
    </Layout>
  );
}

export default User