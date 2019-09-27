import Axios from 'axios';


const initialState = {
    user_id: null,
    username: '',
    showRedirect: false
}

const REGISTER_USER = 'REGISTER_USER';
const LOGIN_USER = 'LOGIN_USER';
const LOGOUT_USER = 'LOGOUT_USER';
const DELETE_USER = 'DELETE_USER';


export function registerUser(newUser) {
    return {
       type: REGISTER_USER,
       payload: Axios.post('/auth/register', newUser)
    }
 }

export function loginUser(user) {
    return {
       type: LOGIN_USER,
       payload: Axios.post('/auth/login', user)
    }
 }

export function logoutUser() {
    Axios.post('/auth/logout')
 
    return {
       type: LOGOUT_USER
    }
 }

export function deleteUser(){
   Axios.delete('/auth/delete')

   return {
      type: DELETE_USER
   }
}

export default function reducer(state = initialState, action){
    const {type, payload} = action;

    

    switch(type){
        case `${REGISTER_USER}_FULFILLED`:
         return {
            ...state,
            user_id: payload.data.user_id,
            username: payload.data.username,
            showRedirect: true
         };
         case `${LOGIN_USER}_FULFILLED`:
            
         return {
            ...state,
            user_id: payload.data[0].user_id,
            username: payload.data[0].username,
            showRedirect: true
         };
         case LOGOUT_USER:
         return {
            userId: null,
            username: '',
            showRedirect: false
         };
         case DELETE_USER:
            return {
               userId: null,
               username: '',
               showRedirect: false
            }
        default: return state;
    }
}