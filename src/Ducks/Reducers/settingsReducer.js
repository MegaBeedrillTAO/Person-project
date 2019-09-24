import Axios from 'axios';


const initialState = {
    name: '',
    background_color: '',
    container_color: '',
    chat_bubble_color: '',
    language: ''
}

const GET_SETTINGS = 'GET_SETTINGS';

export function getSettings(){
    return {
        type: GET_SETTINGS,
        payload: Axios.get('/settings/get')
    }
}


export default function reducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        
        case `${GET_SETTINGS}_FULFILLED`:
                
            return{
                
                name: payload.data.name,
                background_color: payload.data.background_color,
                container_color: payload.data.container_color,
                chat_bubble_color: payload.data.chat_bubble_color,
                language: payload.data.language
            }


        default: return state;
    }
}