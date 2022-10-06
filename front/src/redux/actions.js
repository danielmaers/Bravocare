import axios from "axios"
export const GET_NURSEDATA="GET_NURSEDATA"
export const GET_FACILITIES="GET_FACILITIES"
export const GET_MORE_SHIFTS="GET_MORE_SHIFTS"
export const GET_REMAINING_SPOTS="GET_REMAINING_SPOTS"
export const GET_NURSE_HIRING_POSIBILITY="GET_NURSE_HIRING_POSIBILITY"


export function getAllFacilities(){
    return function(dispatch){
        return axios("http://localhost:3001/facilities")
        .then(res=>dispatch({type: GET_FACILITIES, payload: res.data}))
        .catch(error=>console.log(error))
    }
}

export function getNurseData(id){
    return function(dispatch){
        return axios(`http://localhost:3001/facilities/nursepriority/${id}`)
        .then(res=>dispatch({type: GET_NURSEDATA, payload: res.data}))
        .catch(error=>console.log(error))
    }
}

export function getMoreShifts(){
    return function(dispatch){
        return axios(`http://localhost:3001/facilities/moreshifts`)
        .then(res=>dispatch({type: GET_MORE_SHIFTS, payload: res.data}))
        .catch(error=>console.log(error))
    }
}

export function getRemainingSpots(){
    return function(dispatch){
        return axios(`http://localhost:3001/jobs/remaining`)
        .then(res=>dispatch({type: GET_REMAINING_SPOTS, payload: res.data}))
        .catch(error=>console.log(error))
    }
}

export function getNurseHiringPosibility(){
    return function(dispatch){
        return axios(`http://localhost:3001/jobs/hiring`)
        .then(res=>dispatch({type: GET_NURSE_HIRING_POSIBILITY, payload: res.data}))
        .catch(error=>console.log(error))
    }
}
