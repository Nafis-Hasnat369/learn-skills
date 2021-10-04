import React, { useEffect, useState } from 'react';
import Course from '../course/Course';
import './Services.css';
const Services = () => {
    const [courses, setCourses] = useState([]);
    useEffect(_ => {
        fetch('./cources.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);
    return (
        <>
            <h1>All our courses</h1>
            <div className="services-container container">
                {
                    courses.map(course => <Course
                        key={course.id}
                        course={course}
                    />)
                }
            </div>
        </>
    );
};

export default Services;