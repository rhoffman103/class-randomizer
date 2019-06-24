import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import { Spinner, Container, Row, Col } from 'react-bootstrap'

class Assignments extends Component {

constructor(props) {
    super(props);
    this.state = {
    }
}

componentDidMount() {
    axios.get("https://webscraperproject.herokuapp.com/api/bcsassignments").then((assignmentData) => {
        let completedAssignments = assignmentData.data.calendarAssignments.filter(elem => {
            return moment(elem.dueDate).format("x") < moment().format("x")});

        let upcomingAssignments = assignmentData.data.calendarAssignments.filter(elem => {
            return moment(elem.dueDate).format("x") > moment().format("x")});
        
        let currentWeek = assignmentData.data.currentWeekAssignments;
        console.log(currentWeek.length)

        this.setState(state => {
            return {
                completedAssignments: completedAssignments,
                upcomingAssignments: upcomingAssignments,
                currentWeekAssignments: currentWeek
            }
        });
        console.log(assignmentData);
    })
}

    render() {

        return(
            <Container>
            <h2 className="text-center">Assignments</h2>
                <Row>
                    <Col>
                        <h3>Completed</h3>
                        <ul>
                        {this.state.completedAssignments ? this.state.completedAssignments.map(elem => {
                            return( 
                                    <li key={elem.title}>
                                        <p>{elem.title}</p>
                                        <p>Required? {elem.required ? "Yes" : "No"}</p>
                                    </li>
                                    
                                    )
                        }) : <Spinner animation="border" />}
                        </ul>
                    </Col>
                    <Col>
                        <h3>This Week</h3>
                        <p>{this.state.currentWeekAssignments ? this.state.currentWeekAssignments : "Breathe deep, nothing this week"}</p>
                    </Col>
                    <Col>
                        <h3>Upcoming</h3>
                        <ul>
                        {this.state.completedAssignments ? this.state.upcomingAssignments.map(elem => {
                            return( 
                                <li key={elem.title}>
                                    <p>{elem.title}</p>
                                    <p>Required? {elem.required ? "Yes" : "No"}</p>
                                    <p>Due: {moment(elem.dueDate).format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
                                </li>
                                )
                        }) : <Spinner animation="border" />}
                        </ul>
                    </Col>
                </Row>
            </Container>
        )
    }

}
export default Assignments