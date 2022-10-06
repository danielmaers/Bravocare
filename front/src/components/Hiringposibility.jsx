import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getNurseHiringPosibility } from '../redux/actions'
import "./Hiringposibility.css"

export const Hiringposibility = () => {
    const dispatch=useDispatch()
    const shifts=useSelector(store=>store.nursehiringPosibility)

    useEffect(()=>{
        dispatch(getNurseHiringPosibility())
    },[])
  return (
    <div className='container'>
        <h1>Nurse Hiring Posibility</h1>
        <table>
        
    <thead>

       <tr>
            <th>Nurse ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Jobs can take</th>
        </tr>
    </thead>
        <tbody>

    {
        shifts&&shifts.map((e,i)=>
        <tr key={i}>
            <td>{e.nurse_id}</td>
            <td>{e.nurse_name}</td>
            <td>{e.nurse_type}</td>
            <td>{e.possibleJobs}</td>
          </tr>
        )
    }
    </tbody>

    
    </table>
    </div>
  )
}

