import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import { Spinner, Container, Row, Col } from 'react-bootstrap'

const Assignments = props => {

    const [completedAssignments, setCompleted] = useState([]);
    const [upcomingAssignments, setUpcoming] = useState([]);

    const [thisWeekAssignments, setThisWeek] = useState([]);

    const fetchAssignmets = () => {
        axios.get("https://webscraperproject.herokuapp.com/api/bcsassignments").then((assignmentData) => {
            let completedAssignments = assignmentData.data.calendarAssignments.filter(elem => {
                return moment(elem.dueDate).format("x") < moment().format("x")
            });

            let upcomingAssignments = assignmentData.data.calendarAssignments.filter(elem => {
                return moment(elem.dueDate).format("x") > moment().format("x")
            });

            let currentWeek = assignmentData.data.currentWeekAssignments;

            setCompleted(completedAssignments)
            setThisWeek(currentWeek)
            setUpcoming(upcomingAssignments)

        });
    }

    useEffect(() => {
        fetchAssignmets();
    }, [])
    let content = (
        <Container>
            <h2 className="text-center">Assignments</h2>
            <Row>
                <Col>
                    <h3>Completed</h3>
                    <ul> {console.log(completedAssignments)}
                        {completedAssignments ? completedAssignments.map(elem => {
                            return (
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
                    <p>{thisWeekAssignments ? thisWeekAssignments : "Breathe deep, nothing this week"}</p>
                </Col>
                <Col>
                    <h3>Upcoming</h3>
                    <ul>
                        {completedAssignments ? upcomingAssignments.map(elem => {
                            return (
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
    return content;
};
export default Assignments