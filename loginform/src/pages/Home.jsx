import React from 'react';
import './Home.css';
import profile from '../assets/photo-1532074205216-d0e1f4b87368.avif';

const Home = () => {
  return (
    <div className='container'>
        <span className='view'>ONLINE</span>
        <img className='profile' src={profile} alt="no image" />
        <h1>James</h1>
        <h2>New York</h2>
        <p>front-end developer</p>
        <div className='btnn'>
            <button className='message'>Message</button>
            <button className='follow'>Following</button>
        </div>
        <ul>
            <li>UI/UX</li>
            <li>Front End Developer</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>React</li>
            <li>Node</li>
        </ul>

    </div>
  )
}

export default Home;