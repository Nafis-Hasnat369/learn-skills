import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Course from '../course/Course';
import Extra from '../Extara/Extra';
import './Home.css';
const Home = () => {
    const [courses, setCources] = useState([]);
    const history = useHistory();
    useEffect(_ => {
        fetch('./shortData.json')
            .then(res => res.json())
            .then(data => setCources(data))
    }, []);

    const handleServices = _ => {
        history.push('/services')
    }
    return (
        <>
            <h2>CHOOSE YOUR COURSE</h2>
            <div className="courses container" >
                {
                    courses.map(course => <Course
                        key={course.id}
                        course={course}
                    />)
                }
            </div >
            <Extra />
            <div className="services" >
                <button onClick={handleServices} className="btn-primary button">All course services...</button>
            </div>
        </>
    );
};

export default Home;