import React from 'react';
import Profile from './Profile';
import { connect } from 'tls';
import * as axios from 'axios';
import {setUserProfile} from '../../redux/profileReducer';

class ProfileComponent extends React.Component{
    componentDidMount (){
        this.props.setToggleIsFetching(true);
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2')
            .then(response => {
                this.props.setUserProfile(response.data);
        });
    }

    render () {
        return (
        <div>
            <Profile {...this.props} profile={this.props.profile}/>
        </div>
    )}
}

let mapStateToProps = (state) => ({ profile: state.profilePage.profile })
export default connect (mapStateToProps, 
    {setUserProfile})(ProfileComponent);