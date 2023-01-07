import React from 'react'


export default function Input(props) {

  return (
   <>
  <div>
    <div className='mt-2 d-flex justify-content-center'>
      <input className="form-control" id={props.id} placeholder={props.placeholder} value={props.value} name={props.name} onChange={props.handleChange} style={{borderRadius: "20px", width: "85%"}}></input>
    </div>
  </div>
   </>
  )
}