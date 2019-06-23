import React from 'react';
import '../styles/project.css';



export default class ProjectCard extends React.Component {

    constructor(props) {
        super(props);
        this.viewSite = this.viewSite.bind(this);
        this.viewOnGithub = this.viewOnGithub.bind(this);
    }

    viewSite() {
        console.log(this.props.web === null);
        if (this.props.web !== null ) {
            return (
                <a style={{marginLeft: "15px"}} href={this.props.web}>View Site</a>
            )
        }
    }

    viewOnGithub() {

    }

    render() {
        return (
            <div style={{width: '400px',marginRight: '5%',marginBottom:'5%'}}>
                <br/><br/>

                <div className="project-card-container">
                    <img src={this.props.image}/>
                    <div className="description">
                        <span className="project-title">{this.props.title}</span>
                        <br/>
                        <div className="description-text">
                        <span className="description-text">{this.props.text}
                            </span>
                            <br/>
                        <a href={this.props.git}>View on Github</a>
                        {this.viewSite()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}