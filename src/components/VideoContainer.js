import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { YOUTUBE_VIDEOS_API } from '../utils/constant';
import Shimmer from './Shimmer';
import VideoCard, { AdVideoCard } from './VideoCard';

const VideoContainer = () => {

  const [videos , setVideos] = useState([])


  useEffect(()=>{

    getVideos();


  },[])

  const getVideos = async () => {
      const data = await fetch(YOUTUBE_VIDEOS_API)

      const json = await data.json()

      // console.log(json.items)
      setVideos(json.items)

  }


  return (videos.length===0)? <Shimmer /> : (
    <div className='flex flex-wrap'>

      {/* AdVideoCard */}
      { videos[0] && <AdVideoCard info={videos[0]} />}

      {
        videos.map((video)=>

        <Link key={video.id} to={"/watch/?v=" + video.id}>

          <VideoCard info={video}  />
        </Link>
        )
      }


    </div>
  )
}

export default VideoContainer

