import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '1ba9423a-f457-40c5-8e81-5ee1429d588d'}
})

export const userAPI = {
    getUsers (currentPage=1, pageSize=10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,{
        })
        .then(response =>{return response.data})
    },
    followUser(id){
        return instance.post(`follow/${id}`)
        .then (response =>{return response.data})
    },
    unfollowUser(id){
       return instance.delete(`follow/${id}`)
       .then (response =>{return response.data})
    }

}