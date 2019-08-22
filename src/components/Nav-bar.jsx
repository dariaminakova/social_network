import React from 'react';
//import style from '../component-styles/Nav.module.css';
import ListGroup from 'react-bootstrap/ListGroup'

const NavBar = () => {
    return (
        <ListGroup variant="flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
        </ListGroup>
    );
};

export default NavBar;