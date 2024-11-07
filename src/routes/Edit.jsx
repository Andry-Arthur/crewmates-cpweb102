import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Updated import
import { supabase } from '../client'; // Ensure you have the correct path to your Supabase client

const Edit = () => {
    const { id } = useParams();
    const navigate = useNavigate(); // Updated hook
    const [crewmate, setCrewmate] = useState({
        name: '',
        speed: '',
        color: '',
    });

    useEffect(() => {
        // Fetch the crewmate data from an API or state management
        // For example:
        // fetch(`/api/crewmates/${id}`)
        //   .then(response => response.json())
        //   .then(data => setCrewmate(data));
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCrewmate({
            ...crewmate,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { data, error } = await supabase
            .from('mates')
            .update(crewmate)
            .eq('id', id)
            .select();

        if (error) {
            console.error('Error updating crewmate:', error);
        } else {
            navigate('/crewmates'); // Updated navigation
        }
    };

    return (
        <div>
            <h1>Edit Crewmate</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={crewmate.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Speed:</label>
                    <input
                        type="number"
                        name="speed"
                        value={crewmate.speed}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Color:</label>
                    <input
                        type="text"
                        name="color"
                        value={crewmate.color}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default Edit;