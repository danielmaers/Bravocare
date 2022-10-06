import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRemainingSpots } from '../redux/actions'

export const Remainingspots = () => {
const dispatch=useDispatch()
const remSpots=useSelector(store=>store.remainingSpots)

    useEffect(()=>{
        dispatch(getRemainingSpots())
    },[])

  return (
    <div className='container'>
       <h1>
        List of Remaining Job Spots
        </h1> 
       <table>
        
    <thead>

       <tr>
            <th>job ID</th>
            <th>Spots Remain</th>
        </tr>
    </thead>
        <tbody>

    {
        remSpots&&remSpots.map((e,i)=>
        <tr key={i}>
            <td>{e.jobID}</td>
            <td>{e.remain}</td>
          </tr>
        )
    }

    </tbody>
    
    </table>
          
        </div>
  )
}
