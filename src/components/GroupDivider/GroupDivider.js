import React, { useReducer, useContext } from 'react';
import Row from 'react-bootstrap/Row';
import DividerForm from './DividerForm';
import RosterContext from '../../context/roster-context';
import GroupList from './GroupList';
import groupsReducer from '../../reducers/groups';

const GroupDivider = () => {
    
    const { rosterState } = useContext(RosterContext)  
    const [groupState, groupsDispatch] = useReducer(groupsReducer, []);

    return(
        <RosterContext.Provider value={{ groupState, rosterState, groupsDispatch }}>
            <div className="group-divider m-2">
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
};

export default GroupDivider;