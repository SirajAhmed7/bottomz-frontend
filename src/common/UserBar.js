import React from 'react'

export default function UserBar() {
  return (
    <div className='mt-3 mx-3 d-flex   align-items-center bg-light shadow' style={{borderRadius: "19px", }}>
      <div>
        <p className='mb-0 ml-3 mt-3' style={{fontWeight: "800"}}>Hey there, Stranger !</p>
        <p className="d-flex m-0 ml-3" style={{fontWeight: "800"}}>Welcome to the <p style={{color: "#d600ff"}} className='ml-1'>PARTAY.</p> &#127880;</p>
      </div>
      <div className="ml-auto mr-4"><i className="bi bi-arrow-right" style={{fontSize: "25px"}}></i>
      </div>
  </div>
  )
} 
