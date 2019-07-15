import React, { useContext, useReducer } from 'react';
import Form from 'react-bootstrap/Form';
import RosterContext from '../../context/roster-context';
import rosterReducer, { TOGGLE_ATTENDANCE } from './../../reducers/roster';

const AttendanceSelector = () => {

    const { rosterState } = useContext(RosterContext);
    const rosterDispatch = useReducer(rosterReducer, [])[1]
    
    const toggleStudentAttendance = (studentId, rosterState) => {
        rosterDispatch({
            type: TOGGLE_ATTENDANCE,
            studentId,
            rosterState
        })
    };

    const toggleCheckbox = (event) => {
        toggleStudentAttendance(event.currentTarget.id, rosterState)
    }

    const CheckboxList = () => {
        return (
            rosterState.roster ?
            <Form>
                { rosterState.roster
                .map((student) => (
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
            :
            <React.Fragment />
        )
    }

    return (
        <React.Fragment>
            <CheckboxList />
        </React.Fragment>
    )
}

export default AttendanceSelector;