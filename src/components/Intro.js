import React from 'react';
import '../styles/home.css';




export default class Intro extends React.Component {

    render() {
        return (
                <div className="intro-container">
                    <div className="intro-title">
                        <span>Hi, I'm Keith.</span>
                    </div>
                    <br/>
                    <span className="intro-text">I recently graduated from UC Berkeley where I studied 
                        Computer Science & Cognitive Science. I enjoy designing and building User Interfaces. I am currently looking for roles in
                        <br/>
                        front-end software development.
                        {" "}<br/>
                        Let's connect!
                    </span>
                </div>
        )
    }
}