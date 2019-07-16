import React, { useContext } from 'react';
import RosterContext from '../../context/roster-context';
import CheckboxCols from './CheckboxCols';
import Row from 'react-bootstrap/Row';

const AttendanceSelector = () => {

    const { rosterState } = useContext(RosterContext);

    return (
        rosterState.roster ?
        <React.Fragment>
            <h3>Mark Absent Students</h3>
            <Row>
                <CheckboxCols />
            </Row>
        </React.Fragment>
        :
        <React.Fragment />
    )
};

export default AttendanceSelector;