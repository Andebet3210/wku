import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpg'
import play_icon from '../../assets/play-icon.png'
const About = () => {
  return (
    <div className='about'>
<div className="about-left">
   <img src={about_img} alt="" className='about-img'/>
      {/* <img src={play_icon} alt="" className='play-icon'/> */}
</div>
<div className="about-right">
<h3>ABOUT UNIVERSITY</h3>
<h2>Nurturing Tomorrow's Leaders Today</h2>
<p>Welcome to Wolkite University, where innovation meets tradition. Established in 2004, we are 
a leading institution committed to academic excellence, cutting-edge research, and community engagement.

Our diverse programs span a wide range of disciplines, fostering critical thinking, creativity, and leadership in 
our students. With a distinguished faculty, state-of-the-art facilities, and a vibrant campus life, Wolkite Universty
 provides an environment that inspires learning and growth.

At the heart of our mission is a commitment to empowering individuals to make meaningful contributions to society. 
Whether through groundbreaking research, service initiatives, or entrepreneurial ventures, we strive to shape future 
leaders who can tackle global challenges with confidence and integrity.

Join us in building a brighter future—because at Wolkite University, your journey matters.</p>
</div>
      
    </div>
  )
}

export default About
