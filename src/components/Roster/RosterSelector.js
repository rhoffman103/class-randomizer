import React, { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import RosterContext from '../../context/roster-context';

const RosterSelector = () => {

    const { rosters, rosterDispatch } = useContext(RosterContext);
    const setRoster = (value) => {
        if (value !== 'null') {
            rosterDispatch({
                type: 'SET_ROSTER',
                rosterIndex: value
            })
        }
    };

    return (
        <Form className="m-2">
            <Form.Group controlId="exampleForm.ControlSelect2">
                <Form.Label>Rosters</Form.Label>
                <Form.Control as="select" onChange={(e) => setRoster(e.currentTarget.value)}>
                    <option defaultValue value="null">select roster</option>
                    {rosters.map((roster, index) => {
                        return <option key={`id-${roster.name}-${index}`} value={index}>{roster.name}</option>
                    })}
                </Form.Control>
            </Form.Group>
        </Form>
    );
};

export default RosterSelector;