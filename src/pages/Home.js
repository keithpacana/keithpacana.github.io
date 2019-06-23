import React from 'react';
import '../styles/home.css';
import Intro from '../components/Intro';

class Home extends React.Component {
    componentDidMount() {
        document.title = 'Keith Pacana';
      }
    render() {
        return (
            <div>
                <Intro/>
            </div>
        )
    }
}

export default Home;