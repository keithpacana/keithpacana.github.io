import React from 'react';
import '../styles/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedinIn, faGithub} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

export default class Footer extends React.Component {

    render() {
        return (
            <div className="footer-container"> 
                <div className="footer-flex">
                    <a href="" className="footer-item linkedin"><FontAwesomeIcon icon={faLinkedinIn} size="lg"/></a>
                    <a href="https://github.com/keithpacana" className="footer-item git"> <FontAwesomeIcon icon={faGithub} size="lg"/></a>
                    <a href="" className="footer-item email"> <FontAwesomeIcon icon={faEnvelope} size="lg" /></a>
                </div>
            </div>
        )
    }
}