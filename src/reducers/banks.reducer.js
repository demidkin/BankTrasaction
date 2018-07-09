export default function banksStore(state = [], action = {}){
    if (action.type === 'BANKS_LOADED'){
        return { banks: action.payload }
    }
    if (action.type === 'BANKS_LOADED_ERROR'){
        return { errors: action.payload }
    }
    return state;   
}