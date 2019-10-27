import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import * as axios from 'axios';
import {withRouter} from 'react-router-dom';
import {setUserProfile} from '../../redux/profileReducer';

class ProfileComponent extends React.Component{
    componentDidMount (){
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
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

const WithRouterProfileComponent = withRouter(ProfileComponent);
const mapStateToProps = (state) => ({ profile: state.profilePage.profile });
export default connect(mapStateToProps, {setUserProfile})(WithRouterProfileComponent);