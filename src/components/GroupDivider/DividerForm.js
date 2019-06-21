import React, { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import RosterContext from '../../context/roster-context';

const DividerForm = () => {

    const { setGroupSize } = useContext(RosterContext)

    return (
        <Form className="m-2">
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Group Size</Form.Label>
                <Form.Control
                    as="select"
                    onChange={(e) => setGroupSize(e.target.value)}
                >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Form.Control>
            </Form.Group>
        </Form>
    )
}

export default DividerForm;