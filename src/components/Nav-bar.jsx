import React, {Component} from 'react';
import style from '../component-styles/Nav.module.css';
import {Link} from 'react-router-dom';
// import ListGroup from 'react-bootstrap/ListGroup'

class NavBar extends Component {
    render(){
        return (
            <div className={style.nav}>
                <Link className={style.item} to='/profile'>Profile</Link>
                <Link className={style.item} to='/dialogs'>Messages</Link>
                <Link className={style.item} to='/news'>News</Link>
                <Link className={style.item} to='/music'>Music</Link>
                <Link className={style.item} to='/settings'>Settings</Link>
            </div>
        );
    }
};

export default NavBar;