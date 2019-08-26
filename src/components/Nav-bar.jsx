import React, {Component} from 'react';
import style from '../component-styles/Nav.module.css';
import {NavLink} from 'react-router-dom';
// import ListGroup from 'react-bootstrap/ListGroup'

class NavBar extends Component {
    render(){

        const{state} = this.props;

        let friends = state.friendsObj.map((f) => {
            return <li>{f.name}</li>
        });

        return (
            <div className={style.nav}>
                <NavLink className={style.item} to='/profile'>Profile</NavLink>
                <NavLink className={style.item} to='/dialogs'>Messages</NavLink>
                <NavLink className={style.item} to='/news'>News</NavLink>
                <NavLink className={style.item} to='/music'>Music</NavLink>
                <NavLink className={style.item} to='/settings'>Settings</NavLink>

                <ul className={style.f_container}>
                    {friends}
                </ul>

            </div>
        );
    }
};

export default NavBar;