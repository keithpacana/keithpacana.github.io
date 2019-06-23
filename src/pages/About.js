import React from 'react';
import '../styles/home.css';
import '../styles/about.css';


export default class About extends React.Component {

    componentDidMount() {
        document.title = 'About Keith';
      }

    render() {
        return (
                <div className="about-intro-container">
                        <img className="img-style" src="./images/me.jpg"/>
                        <div className="about-container"> <span >I recently graduated from UC Berkeley
                            where I studied Computer Science and Cognitive Science. 
                            I am currently looking for new-grad/junior full-time opportunities in software! 
                        </span>
                        <br/>
                        <br/>
                        <span>I was born in the Philippines, but moved to the U.S. at 8 years old.</span>
                        <br/>
                        <br/>
                        <span>
                        I'm passionate about design
                            and front-end development. When I was 11 years old,
                            I spent a lot of my time browsing different
                            Myspace profiles and Disney Channel celebrity fan-sites where I 
                            saw some really cool designs, which inspired me to experiment with 
                            HTML and CSS. As I learned front-end languages and technologies, I found
                            designing and building web-interfaces to be a really enjoyable and rewarding
                            experience.
                        </span>
                        <br/>
                        <br/>
                        <span>
                            I want to help improve user experience
                            by effectively communicating information through
                            intuitive and aesthetically pleasing UI. 
                        </span>
                        <br/><br/>
                        <span>
                            When I'm not coding or learning new
                            front-end technologies, I love exercising, doing karaoke on Youtube, or looking for new music.
                            Currently, I'm super into new wave (from the 80s), synth pop 
                            and jazz music. If you have any suggestions within those genres let me know!
                        </span>
                        </div>
                </div>
        )
    }
}