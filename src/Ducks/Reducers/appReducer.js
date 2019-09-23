

const initialState = {
    currentPage: '',
    userCommands: []
}

export default function reducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        default: return state;
    }
}