import { RECEIVE_ENTRIES, ADD_ENTRY } from '../actions/index'

function entries(state ={}, action){
    switch(action.type){
        case RECEIVE_ENTRIES:
            return {
                ...state,
                ...action.RECEIVE_ENTRIES
            }
        case ADD_ENTRY:
            return {
                ...state,
                ...action.entry
            }
        default:
            return state;
    }
}

export default entries;