import React from 'react';
import style from '../../component-styles/Users.module.css';
import userPhoto from '../../assets/images/user-icon-image.jpg'

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
            <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="avatar"/>
        </div>
        <div>{u.name}</div>
        <div>{u.status}</div>
        <div>{'u.location.city'}</div>
        <div>{'u.location.country'}</div>
        <div>
            {u.followed 
            ? <button onClick ={ () => {
                props.unfollow(u.id)} }>unfollow</button>
            : <button onClick ={ () => {
                props.follow(u.id)} }>follow</button>
            }
        </div>
        </div> )
    } 
    </div>)
}
export default Users;