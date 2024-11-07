import React from 'react';
import crewmateImage from "../assets/crewmates.png";
import spaceshipImage from "../assets/spaceship.png";
import './Home.css';

const Home = () => {
    return (
        <div>
            <h1>Welcome to the Crewmate Creator!</h1>
            <p>Here is where you can create your very own set of crewmates before sending them off into space! Don't be sus!</p>
            <img src={crewmateImage} alt="Crewmate" />
            <img src={spaceshipImage} alt="Spaceship"/>
        </div>
    );
};

export default Home;