import React from 'react';

class NotFound extends React.Component {
    componentDidMount() {
        document.title = '404 Page Not Found';
      }
    render() {
        return (
            <div className="about-intro-container">
                <span>404</span>
            </div>
        )
    }
}

export default NotFound;