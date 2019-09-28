import Axios from 'axios';

const initialState = {
    currentPage: '/',
    userCommands: [],
    joke: ''
}

const CHANGE_PAGE = 'CHANGE_PAGE';
const CREATE_JOKE = 'CREATE_JOKE';

export function changePage(page){
    return {
        type: CHANGE_PAGE,
        payload: page
    }
}

export function createJoke(){
    return {
        type: CREATE_JOKE,
        payload: Axios.get('https://official-joke-api.appspot.com/jokes/random')
    }
}

export default function reducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case CHANGE_PAGE:
            return{
                ...state,
                currentPage: payload
            }
        case CREATE_JOKE:
            return {
                ...state,
                joke: payload.data.setup + '' + payload.data.punchline
            }
        default: return state;
    }
}