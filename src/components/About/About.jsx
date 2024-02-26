import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
          <div className="about-left">
             <img src={about_img} alt="" className = 'about-img'/> 
             <img src={play_icon} alt="" className = 'play-icon'/> 
      </div>
          <div className="about-right">
              <h3>ABOUT UNIVERSITY</h3>
              <h2>Nurturing Tomorrow's Leaders Today</h2>
              <p>Embark on a transformative educational journey with our University's comprehensive education programs. Our cutting-edge curriculum is desifned to empoer students with the knolwdge, skills, and experiences needed to excel in the dynamic field of education.</p>
              <p>With a focus on innovation, hands-on learning, and personalised mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools and communities.</p>
              <p>Whatever you aspire to become, be it a teacher, administrator, counselor, or educational leader, our diverse ramge of progrmas offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education</p>
      </div>
    </div>
  )
}

export default About
