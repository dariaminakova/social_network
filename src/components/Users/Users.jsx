import React from 'react';
import {NavLink} from 'react-router-dom';
import userPhoto from '../../assets/images/user-icon-image.jpg';
import style from '../../component-styles/Users.module.css';
import {userAPI} from '../../api/api'

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++){
        pages.push(i);
    }
    return (<div>
        <div>
            { pages.map( p =>{
                return (<span key={p} className={props.currentPage === p && style.selectedPage}
                onClick = {() => {props.onPageChanged(p)}} >{p}</span>)
            })}
        </div>
    {   props.users.map( u => <div key={u.id}>
        <div className={style.avatar}>
            <NavLink to={'/profile/'+u.id}>
                <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="avatar"/>
            </NavLink>
        </div>
        <div>{u.name}</div>
        <div>{u.status}</div>
        <div>{'u.location.city'}</div>
        <div>{'u.location.country'}</div>
        <div>
            {u.followed 
            ? <button onClick ={ () => { userAPI.unfollowUser(u.id)
        .then(data => {
            if(data.resultCode === 0 ){
                props.unfollow(u.id)
            }});
                } }>unfollow</button>
            : <button onClick ={ () => { userAPI.followUser(u.id)
        .then(data => {
            if(data.resultCode ===0 ){
                props.follow(u.id)
            }});
                } }>follow</button>
            }
        </div>
    </div> )
    } 
    </div>)
}
export default Users;