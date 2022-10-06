import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMoreShifts } from '../redux/actions'

export const Moreshifts = () => {
    const dispatch=useDispatch()
    const hiring=useSelector(store=>store.moreShifts)

    useEffect(()=>{
        dispatch(getMoreShifts())
    },[])
  return (
    <div className='container'>
        <h1>More shifts taken at Facilities</h1>
        <table>
        
    <thead>

       <tr>
            <th>Facility ID</th>
            <th>Facility Name</th>
            <th>Nurse Name</th>
            <th>Shifts Taken</th>
        </tr>
    </thead>
        <tbody>

    {
        hiring&&hiring.map((e,i)=>
        <tr key={i}>
            <td>{e.facility_id}</td>
            <td>{e.facility_name}</td>
            <td>{e.nurse.nurseName}</td>
            <td>{e.nurse.shifts}</td>
          </tr>
        )
    }
    </tbody>

    
    </table>
    </div>
  )
}

