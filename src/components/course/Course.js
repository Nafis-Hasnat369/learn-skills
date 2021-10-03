import React from 'react';
import './Course.css';
const Course = props => {
    const { img, name, price } = props.course;
    return (
        <div className="course">
            <img src={img} alt="" />
            <h3>Course name: {name}</h3>
            <h4>Cost: {price}</h4>
            <button className="btn-primary btn-learn">Learn more</button>
        </div>
    );
};

export default Course;