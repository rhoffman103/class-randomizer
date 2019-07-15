import React, { useContext, useReducer, useEffect } from 'react';
import RosterContext from '../../context/roster-context';
import rosterReducer, { TOGGLE_ATTENDANCE } from './../../reducers/roster';
import groupsReducer, { GROUP_CHECKBOXES } from './../../reducers/groups';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AttendanceSelector = () => {

    const { rosterState } = useContext(RosterContext);
    const rosterDispatch = useReducer(rosterReducer, [])[1];
    const [groupedCheckboxRoster, groupsDispatch] = useReducer(groupsReducer, []);

    useEffect(() => {
        groupsDispatch({
            type: GROUP_CHECKBOXES,
            state: rosterState
        })
    }, [rosterState])
    
    const toggleCheckbox = (event) => {
        rosterDispatch({
            type: TOGGLE_ATTENDANCE,
            studentId: event.currentTarget.id,
            rosterState
        })
    };

    const CheckboxCols = ({ groups }) => (
        groups.map((group, i) => (
            <Col className="col-12 col-sm-6 col-md-4" key={`form-col-${i}`}>
                <Form>
                    { group.map((student) => (
                        <Form.Check
                            type='checkbox'
                            id={student.id}
                            label={student.name}
                            key={student.id}
                            onChange={toggleCheckbox}
                            checked={!student.isPresent}
                        />
                    )) }
                </Form>
            </Col>
        ))
    );

    const CheckboxList = () => {
        return (
            rosterState.roster ?
            <React.Fragment>
                <h3>Mark Absent Students</h3>
                <Row>
                    <CheckboxCols groups={groupedCheckboxRoster} />
                </Row>
            </React.Fragment>
            :
            <React.Fragment />
        )
    };

    return (
        <React.Fragment>
            <CheckboxList />
        </React.Fragment>
    );
};

export default AttendanceSelector;