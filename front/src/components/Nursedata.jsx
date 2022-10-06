import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllFacilities, getNurseData } from '../redux/actions'
import "./nursedata.css"

export const Nursedata = () => {
const [facID, setFacID]= useState("")
const dispatch=useDispatch()
const facilities=useSelector(store=>store.facilities)
const nursedata=useSelector(store=>store.nurseData)

    useEffect(()=>{
     dispatch(getAllFacilities())
    },[])
    
   
function handleChange(e){
    setFacID(e.target.value)
}

function handleSubmit(e){
    e.preventDefault()    
    if(facID) dispatch(getNurseData(facID))
    else alert("Please select a Facility")
}
  return (
    <div>
        <div>
            <form onSubmit={handleSubmit}>
            <select name="facility" id="" onChange={handleChange}>
            <option defaultValue=""/>
                    
                    
            {
                facilities&&facilities.map((e,i)=>(
                    <option key={i} value={e.facility_id}>
                        {e.facility_name.trim()}
                    </option>
                ))
            }
            </select>
            <button type='submit'>Submit</button>


            </form>
        </div>
        <div className='boxContainer'>

        {
            nursedata&&nursedata.map((e,i)=>(
                <div key={i} className="nurseBox">{e.nurseID}</div>
                ))
            }
            </div>
    </div>
  )
}
