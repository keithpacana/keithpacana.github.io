import React from 'react';
import ProjectCard from '../components/ProjectCard'

class Projects extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            collection: "Website I built using HTML, CSS, JavaScript, and jQuery that mimicks the "
            + "experience of playing vinyl records.",
            represent: "Android app that uses Pro Publica API to display " +
            "representatives in the house & senate's contact info based on entered zip code.",
            ping: "Android app for people physical mobility problems that " +
            "allows them to rate the accessibility of public spaces & report ADA violations.",
            transit: "Android app that lists out the most convenient public transits to reach " +
            "desired destination from entered location.",
            course: "Web app built using Node.js, Express, and Bootstrap that helps educators " +
            "manage students into different courses."

        }
    }

    componentDidMount() {
        document.title = 'My Work';
      }
    render() {
        let collection = this.state.collection;
        let represent = this.state.represent;
        let transit = this.state.transit;
        let course = this.state.course;
        let ping = this.state.ping;
        return (
            <div>
                <span className="projects-descript">Here are some examples of some work I've done.</span>
                <div className="project-container">
                    <ProjectCard title="My Collection" image={"./images/collection.png"} git = {"https://github.com/keithpacana/mycollection"} web={"https://keithpacana.github.io/mycollection/"} text={collection}/>
                    <ProjectCard title="Represent" image={"./images/represent.png"} web={null} text={represent} git={"https://github.com/cs160-berkeley/represent-app"}/>
                    <ProjectCard title="PING!" image={"./images/ping.png"} web={null} git={"https://github.com/cs160-berkeley/finalproject-fa18-group37-fa18"} text={ping}/>
                    <ProjectCard title="Easy Transit" image={"./images/transit.png"} text={transit} web={null} git={"https://github.com/keithpacana/BusApp"}/>
                    <ProjectCard title="Course Success" image={"./images/course.png"} text={course} git={"https://github.com/keithpacana/courseSuccess"} web={"https://coursesuccess.herokuapp.com"}/>
                </div>
            </div>
        )
    }
}

export default Projects;