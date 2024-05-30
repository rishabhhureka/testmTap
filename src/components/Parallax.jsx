import React from 'react'
import { ParallaxBanner } from 'react-scroll-parallax';
const Parallax = () => {
  return (
    <ParallaxBanner
      layers={[
        {
          image: 'https://videos.pexels.com/video-files/5818973/5818973-hd_1280_720_24fps.mp4', // Add your video path here
          amount: 0.5,
          expanded: false,
          type: 'video',
        },
      ]}
      style={{ height: '100vh' }}
    >
      <div className="content">
        <h1>PRO</h1>
        <p>Reach your full potential building relationships with mTap</p>
      </div>
    </ParallaxBanner>
  )
}

export default Parallax