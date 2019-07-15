import React, { useState, useReducer } from 'react';
import Row from 'react-bootstrap/Row';
import RosterSelector from './RosterSelector';
import AttendanceSelector from './AttendanceSelector';
import RosterContext from '../../context/roster-context';
import Rosters from '../../rosters';
import GroupDivider from '../GroupDivider/GroupDivider';
import rosterReducer from '../../reducers/roster';

const RosterContainer = () => {

    const rosters = useState(Rosters);
    const [rosterState, rosterDispatch] = useReducer(rosterReducer, [])

    return (
        <RosterContext.Provider value={{ rosters: rosters[0], rosterState, rosterDispatch }}>
            <div className="roster-container">
                <Row>
                    <h2 className="m-2">Select Roster</h2>
                </Row>
                <Row>
                    <RosterSelector />
                </Row>
                <AttendanceSelector />
                <Row>
                    <GroupDivider />
                </Row>
            </div>
        </RosterContext.Provider>
    );
}

export default RosterContainer;