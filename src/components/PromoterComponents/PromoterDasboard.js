import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PromoterSidebar from "../../common/PromoterSidebar"

export default function PromoterDasboard() {
  const navigate = useNavigate()
  return (
      <>
      <div className='d-lg-flex vh-100 px-lg-5 p-3'>
        <div className='col-lg-3 p-0'>
          <PromoterSidebar/>
        </div>
        <div className='col-lg-9 p-0 d-flex flex-column bg-light justify-content-center align-items-center text-center'>
          <h4 className='p-0 p-3'>Haven't hosted an event yet? Don't worry we got you</h4>
          <Link onClick={()=>navigate('/host-an-event')} className="btn d-inline-flex align-items-center rounded border-0 collapsed text-white justify-content-center" style={{background: "#800aca", width: "35%" }} data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
              Host An Event
          </Link>
        </div>
      </div>
      </>
  )
}
