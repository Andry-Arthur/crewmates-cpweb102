import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { supabase } from '../client'; 
import './Create.css';

const Create = () => {
    const [name, setName] = useState('');
    const [speed, setSpeed] = useState('');
    const [color, setColor] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newCrewmate = { name, speed, color };

        const { data, error } = await supabase
            .from('mates')
            .insert([newCrewmate])
            .select();

        window.location = "/";
        if (error) {
            console.error('Error inserting crewmate:', error);
        } else {
            console.log('Crewmate inserted:', data);
        }
    };

    return (
        <div>
            <h2>Create a New Crewmate</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Speed:</label>
                    <input
                        type="number"
                        value={speed}
                        onChange={(e) => setSpeed(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <br />
                    <label>Color:</label>
                    <div className="color-section">
                        <label>
                            <input
                                type="radio"
                                value="black"
                                checked={color === 'black'}
                                onChange={(e) => setColor(e.target.value)}
                            />
                            <span className="black"></span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="blue"
                                checked={color === 'blue'}
                                onChange={(e) => setColor(e.target.value)}
                            />
                            <span className="blue"></span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="green"
                                checked={color === 'green'}
                                onChange={(e) => setColor(e.target.value)}
                            />
                            <span className="green"></span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="orange"
                                checked={color === 'orange'}
                                onChange={(e) => setColor(e.target.value)}
                            />
                            <span className="orange"></span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="pink"
                                checked={color === 'pink'}
                                onChange={(e) => setColor(e.target.value)}
                            />
                            <span className="pink"></span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="red"
                                checked={color === 'red'}
                                onChange={(e) => setColor(e.target.value)}
                            />
                            <span className="red"></span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="white"
                                checked={color === 'white'}
                                onChange={(e) => setColor(e.target.value)}
                            />
                            <span className="white"></span>
                        </label>
                    </div>
                </div>
                <button type="submit">Create Crewmate</button>
            </form>
        </div>
    );
};

export default Create;