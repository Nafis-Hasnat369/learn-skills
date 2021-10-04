import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Questions.css';
const Questions = () => {
    return (
        <div className="question-container">
            <div className="cover-img">
                <img src="https://themehoster.com/tf/wp/omexo/wp-content/uploads/2021/03/img-1.jpg" alt="" />
            </div>
            <div className="text-start text">
                <h4>POPULAR QUESTIONS</h4>
                <h2>Frequently Asked Questions</h2>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>How can I purchase the courses?</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit blanditiis et quos corporis illo quod aliquam dolorem inventore accusamus exercitationem sed libero veniam excepturi doloremque, maxime animi nihil obcaecati atque quaerat sapiente sequi? Facere porro laborum reprehenderit hic est in!
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Which payment methods are supported?</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit blanditiis et quos corporis illo quod aliquam dolorem inventore accusamus exercitationem sed libero veniam excepturi doloremque, maxime animi nihil obcaecati atque quaerat sapiente sequi? Facere porro laborum reprehenderit hic est in!
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Can I upgrade my membership plan?</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit blanditiis et quos corporis illo quod aliquam dolorem inventore accusamus exercitationem sed libero veniam excepturi doloremque, maxime animi nihil obcaecati atque quaerat sapiente sequi? Facere porro laborum reprehenderit hic est in!
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>How can I cancel my subscription plan?</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit blanditiis et quos corporis illo quod aliquam dolorem inventore accusamus exercitationem sed libero veniam excepturi doloremque, maxime animi nihil obcaecati atque quaerat sapiente sequi? Facere porro laborum reprehenderit hic est in!
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default Questions;