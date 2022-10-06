import {GET_FACILITIES,GET_MORE_SHIFTS,GET_NURSEDATA, GET_NURSE_HIRING_POSIBILITY, GET_REMAINING_SPOTS} from "./actions"

const initialState={
    nurseData:[],
    facilities:[],
    remainingSpots:[],
    nursehiringPosibility:[],
    moreShifts:[]
}

function reducer(state=initialState, {type, payload}){
    switch(type){
        case GET_NURSEDATA:
            return {
                ...state,
                nurseData: payload
            };
        case GET_FACILITIES:
            return {
                ...state,
                facilities: payload 
            };
        case GET_REMAINING_SPOTS:
            return {
                ...state,
                remainingSpots: payload 
            };
        case GET_NURSE_HIRING_POSIBILITY:
            return {
                ...state,
                nursehiringPosibility: payload 
            };
        case GET_MORE_SHIFTS:
            return {
                ...state,
                moreShifts: payload 
            };
       
        default: {
            return state
        }
    }
}

export default reducer;