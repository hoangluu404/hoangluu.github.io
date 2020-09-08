import React from 'react';
import Contacts from '../components/contactForm';
import YouTube from 'react-youtube';
import YoutubeVideo from '../components/youtubeVideo';
import NavigationBar from '../components/NavigationBar';
import Resume from '../pages/resume';
import logo from '../logo.svg';

const Projects = () => {
    return (
        <div>
            <NavigationBar/>
            <img src={logo} className="App-logo" alt="logo" />
            <div>Project Page</div>



            <header className="header">
        
        <p>
          <code>Hoang Luu</code>
        </p>

        <p>Check out this <a href={"https://www.youtube.com/watch?v=vdYlHgyqKqY"}>Demo</a> for my Android Project in Kotlin</p>
      </header>
      <body>
        <Contacts label="Test"/>
        <YoutubeVideo videoID="vdYlHgyqKqY" />
        <p>This website is still under development - Hoang</p>
      </body>
        
        </div>
        
        

    );
}

export default Projects;