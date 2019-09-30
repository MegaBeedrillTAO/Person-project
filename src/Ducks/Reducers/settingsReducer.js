import Axios from 'axios';


const initialState = {
    name: '',
    background_color: '',
    container_color: '',
    chat_bubble_color: '',
    language: '',
    zipcode: 0,
    country: ''
}

const GET_SETTINGS = 'GET_SETTINGS';
const EDIT_SETTINGS = 'EDIT_SETTINGS';

export function getSettings(){
    return {
        type: GET_SETTINGS,
        payload: Axios.get('/settings/get')
    }
}

export function editSettings(settings){
    return{
        type: EDIT_SETTINGS,
        payload: Axios.put('settings/edit', settings)
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
                language: payload.data.language,
                zipcode: payload.data.zipcode,
                country: payload.data.country
            };
        case `${EDIT_SETTINGS}_FULFILLED`:
            return{
                name: payload.data.name,
                background_color: payload.data.background_color,
                container_color: payload.data.container_color,
                chat_bubble_color: payload.data.chat_bubble_color,
                language: payload.data.language,
                zipcode: payload.data.zipcode,
                country: payload.data.country
            }
        

        default: return state;
    }
}