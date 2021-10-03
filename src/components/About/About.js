import React from 'react';
import { useHistory } from 'react-router';
import './About.css';
const About = () => {
    const history = useHistory();
    const handleGetBackToHome = _ => {
        history.push('/home');
    }
    return (
        <>
            <div className="about-container">
                <h4>
                    At Build skills, we’ve seen again and again how the seemingly simple act of creating can be a force for growth, change, and discovery in people’s lives. We want to inspire and multiply the kind of creative exploration that furthers expression, learning and application.
                </h4>
                <br />
                <p>
                    Build skills is an online learning community with thousands of classes for creative and curious people, on topics including illustration, design, photography, video, freelancing, and more. On Skillshare, millions of members come together to find inspiration and take the next step in their creative journey.
                </p>
            </div>
            <button onClick={handleGetBackToHome} className="btn-success home-btn">Get back to Home</button>
        </>
    );
};

export default About;