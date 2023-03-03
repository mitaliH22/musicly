import React from 'react'
import Albums from '../Components/AlbumSlider/Albums'
import Cards from '../Components/Genre/Cards'
import Songs from '../Components/SongList/Songs'
import Layout from './Layout'

function Dashboard() {
  return (
    <Layout>
        <Cards />
        <Songs />
        <Albums />
    </Layout>
  )
}

export default Dashboard