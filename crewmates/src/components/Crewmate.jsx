import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Crewmate.css';
import crewmateND from '../assets/crewmateND.png';
import redCrewmate from '../assets/red.png';
import blueCrewmate from '../assets/blue.png';
import pinkCrewmate from '../assets/pink.png';
import orangeCrewmate from '../assets/orange.png';
import blackCrewmate from '../assets/black.png';
import greenCrewmate from '../assets/green.png';

const colorMap = {
    red: redCrewmate,
    blue: blueCrewmate,
    pink: pinkCrewmate,
    orange: orangeCrewmate,
    black: blackCrewmate,
    green: greenCrewmate
};

const Crewmate = ({ id, name, speed, color }) => {
    const navigate = useNavigate();
    const crewmateImage = colorMap[color] || crewmateND;

    const handleEditClick = () => {
        navigate(`/edit/${id}`);
    };

    return (
        <div className='crewmateCard' >
            <img src={crewmateImage} alt='Crewmate' />
            <h2>{name}</h2>
            <p>Speed: {speed} mph</p>
            <button onClick={handleEditClick}>Edit Crewmate</button>
        </div>
    );
};

export default Crewmate;