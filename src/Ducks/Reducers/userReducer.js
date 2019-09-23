import Axios from 'axios';


const initialState = {
    user_id: 0,
    username: ''
}


export default function reducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        default: return state;
    }
}