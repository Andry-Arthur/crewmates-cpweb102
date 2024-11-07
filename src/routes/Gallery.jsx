import React from 'react';
import { useState, useEffect } from 'react';
import { supabase } from '../client'; // Ensure you have supabaseClient configured
import Crewmate from '../components/Crewmate';
import { Grid, Typography } from '@mui/material';
import './Gallery.css';

const Gallery = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const fetchCrewmates = async () => {
            let { data: mates, error } = await supabase
                .from('mates')
                .select('*');
            if (error) {
                console.error('There was an error fetching the crewmates!', error);
            } else {
                setCards(mates);
            }
        };

        fetchCrewmates();
    }, []);

    return (
        <div className="gallery-container">
            {cards.length > 0 ? (
                cards.map((card, index) => (
                    <div key={index} className="crewmate">
                        <Crewmate name={card.name} speed={card.speed} color={card.color} />
                    </div>
                ))
            ) : (
                <Typography variant="h6" component="p">
                    No crewmates found. Please create a new crewmate.
                </Typography>
            )}
        </div>
    );
};

export default Gallery;