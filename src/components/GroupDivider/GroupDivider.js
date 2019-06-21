import React, { useState, useEffect, useReducer } from 'react';
import Row from 'react-bootstrap/Row';
import DividerForm from './DividerForm';
import RosterContext from '../../context/roster-context';
import june2019roster from '../../rosters/june2019';
import GroupList from './GroupList';
import groupsReducer from '../../reducers/groups';

const GroupDivider = () => {
    
    const [rosterState, setRoster] = useState([]);
    const [groupState, groupsDispatch] = useReducer(groupsReducer, []);
    const [groupSize, setGroupSize] = useState(0);
            
    useEffect(() => {
        setRoster(june2019roster);
    }, []);
    
    useEffect(() => {
        groupsDispatch({
            type: 'RANDOMIZE_GROUPS',
            groupSize,
            rosterState
        })
    }, [groupSize]);

    return(
        <RosterContext.Provider value={{ groupState, setGroupSize }}>
            <div className="group-divider">
                <Row>
                    <h2 className="m-2">Group Divider</h2>
                </Row>
                <Row>
                    <DividerForm />
                </Row>
                <Row>
                    <GroupList />
                </Row>
            </div>
        </RosterContext.Provider>
    );
}

export default GroupDivider;