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
        
        case GET_SETTINGS:
                console.log(payload)
            return{
                
                name: payload.name,
                background_color: payload.background_color,
                container_color: payload.container_color,
                chat_bubble_color: payload.chat_bubble_color,
                language: payload.language
            }


        default: return state;
    }
}