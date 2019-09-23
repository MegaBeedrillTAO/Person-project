import Axios from 'axios';


const initialState = {
    name: '',
    background_color: '',
    container_color: '',
    chat_bubble_color: '',
    language: ''
}


export default function reducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        default: return state;
    }
}