import React, { useContext, useEffect, useState, useCallback } from 'react';
import Form from 'react-bootstrap/Form';
import RosterContext from '../../context/roster-context';

const DividerForm = () => {

    const { groupsDispatch, rosterState } = useContext(RosterContext);
    const [groupSize, setGroupSize] = useState(0);

    const callGroupsDispatch = useCallback((value = 0, roster) => {
        const scrubbedValue = `${value !== 'null' ? value : 0}`;
        groupsDispatch({
            type: 'RANDOMIZE_GROUPS',
            groupSize: scrubbedValue,
            rosterState: roster
        });
    }, [groupsDispatch]);
    
    const setGroups = (value) => {
        setGroupSize(value);
        callGroupsDispatch(value, rosterState.roster)
    };

    useEffect(() => {
        document.getElementById('group-select').value = 'null';
        setGroupSize(0)
        callGroupsDispatch(0, rosterState.roster)
    }, [rosterState, callGroupsDispatch]);

    return (
        <Form className="m-2">
            <Form.Group controlId="group-select">
                <Form.Label>Group Size</Form.Label>
                <Form.Control
                    as="select"
                    value={groupSize}
                    onChange={(e) => setGroups(e.target.value)}
                >
                    <option defaultValue value='null'>select group size</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Form.Control>
            </Form.Group>
        </Form>
    );
};

export default DividerForm;