import React from 'react';
import './Home.css';


const Home = (props) => {
  return (
    <div className='container'>
        <span className='view'>ONLINE</span>
        <img className='profile' src={props.data.profile} alt="no image" />
        <h1>{props.data.name}</h1>
        <h2>{props.data.city}</h2>
        <p>{props.data.work}</p>
        <div className='btnn'>
            <button className='message'>Message</button>
            <button className='follow'>Following</button>
        </div>
        <p className='PARA'>SKILLS</p>
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