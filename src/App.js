import Skill from './skills.js'
import ProjectTile from './project_block'
import './App.css';
import applePieImage from './applePie.png'

import { useEffect, useState, useRef } from 'react';

function App() {

  const [scrollOpacity, setScrollOpacity] = useState(1);
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const skillsRef = useRef(null)
  const projectsRef =useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadeStart = 0;
      const fadeEnd = 1000; // Adjust this value based on when you want the fade to complete
      const fadeRange = fadeEnd - fadeStart;
  
      let newOpacity = 1;
  
      if (scrollY >= fadeStart && scrollY <= fadeEnd) {
        newOpacity = 1 - (scrollY - fadeStart) / fadeRange;
      } else if (scrollY > fadeEnd) {
        newOpacity = 0;
      }
  
      setScrollOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const scrollToSection = (elementRef) =>{
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  }

  return (
    <div className='all'>
      <div className='scrollerBack' style={{ opacity: 1 - scrollOpacity }}></div>
      <div className='scroller' >
        <a onClick={() => scrollToSection(homeRef)} className='scrollButton'>Home</a>
        <a onClick={() => scrollToSection(aboutRef)} className='scrollButton'>About</a>
        <a onClick={() => scrollToSection(skillsRef)} className='scrollButton'>Skills</a>
        <a onClick={() => scrollToSection(projectsRef)} className='scrollButton'>Projects</a>
      </div>
   <div className='header' style={{ opacity: scrollOpacity }} ref={homeRef}>

      <h1 className='name'>Dyer Combariza</h1>

      <div className='subIntro'>
        <div className='subIntro'> A front-end developer focused on Javascript and React</div>
        <div className='subIntro'>Thank you for visiting, explore some of my  projects below</div>
      </div>
  </div> 
    
    <div className='content' style={{ opacity: 1 - scrollOpacity }}>
    <div className='aboutMe' ref={aboutRef}>
      <div className='sectionTitle about'>About Me</div>
      <div className='aboutMeText'>
        <div>I've been programming since I was 7 years old, and started pursuing it as a carrer in 2022</div>
        <div>My programming skills are largely self taught, honed through countless hours of practice, experimentation, and the relentless pursuit of knowledge</div>
        <div>I have a deep love for learning, and am always trying to consume more and become more skilled at what I already know</div>
        <div>Feel free to contact me at <a className='contact' href='mailto:dyer.comb@gmail.com'>dyer.comb@gmail.com </a>if you have any inquiries</div>
      </div>
      
    </div>
    <div className='skillsMax' ref={skillsRef}>
      <div className='sectionTitle skills'>Skills</div>

      <div className='skillList'>
        <Skill name="Javascript"/>
        <Skill name="React"/>
        <Skill name="Node Js"/>
        <Skill name="CSS"/>
        <Skill name="SQL"/>
        <Skill name="HTML"/>
        <Skill name="C"/>
        <Skill name="Python"/>
        <Skill name="Git" />
      </div>
    </div>

    <div className='projectMax' ref={projectsRef}>
      <div className='sectionTitle projects'>Projects</div>
        <div className='projectTileWrapper'>
          <ProjectTile
          name="Apple Product Clone"
          desc="A sleek and modern webpage designed to mirror the aesthetic and functionality of an Apple product site. Built with a focus on clean design and user experience, this project leverages the power of JavaScript, React, and CSS to create a responsive and interactive interface. The site a features smooth, interactive setup, intuitive navigation, and a minimalist layout that reflects the high standards of Apple’s design philosophy. Whether you're showcasing a product or demonstrating your web development skills, this project embodies the elegance and efficiency associated with Apple."
          siteLink="holder"
          linkText="Live Site"
          gitLink="https://github.com/dyercam/Fake-Apple-Landing-Page/tree/main/src"
          gitText="GitHub"
          IMGtile={applePieImage}
          />
           <ProjectTile
          name="This Webpage"
          desc="A dynamic and engaging portfolio webpage showcasing my projects, built with React, JavaScript, and CSS. This site highlights my skills and accomplishments through an intuitive and visually appealing interface. Designed to provide a seamless user experience, the portfolio allows visitors to easily navigate and explore my work. It effectively conveys my passion for coding and commitment to delivering high-quality web solutions."
          siteLink=""
          linkText="Live Site"
          gitLink=""
          gitText="GitHub"
          IMGtile=''
          />
          <ProjectTile
          name="Chinese Takeout Backfacing Page"
          desc="A functional backend webpage designed for employees of a local Chinese restaurant to easily manage and update the menu. This page incorporates basic CRUD operations and interfaces with a database to ensure long-term changes are reflected on the customer-facing site. Built with JavaScript, React, CSS, SQL, and Node.js, the design prioritizes usability and efficiency. While the frontend boasts aesthetic enhancements, this backend page focuses on providing a straightforward and intuitive experience for seamless menu management."
          siteLink=""
          linkText="Live Site"
          gitLink=""
          gitText="GitHub"
          IMGtile=''
          />
          <ProjectTile
          name="Chinese Takeout FrontFacing Page"
          desc="A visually appealing and user-friendly front-facing webpage for a local Chinese restaurant, designed to showcase the menu and enhance the customer experience. Developed using React, JavaScript, CSS, and Node.js. The design emphasizes aesthetics and ease of use, ensuring that customers can effortlessly browse the menu and find their favorite dishes. With attention to detail and a focus on performance, this webpage reflects the quality and hospitality of the restaurant."
          siteLink=""
          linkText="Live Site"
          gitLink=""
          gitText="GitHub"
          IMGtile=''
          />
         
        </div>
      
    </div>
    </div>
   </div>
  );
}

export default App;
