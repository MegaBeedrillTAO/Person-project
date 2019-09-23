

const initialState = {
    currentPage: '/',
    userCommands: []
}

const CHANGE_PAGE = 'CHANGE_PAGE';

export function changePage(page){
    return {
        type: CHANGE_PAGE,
        payload: page
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
        default: return state;
    }
}