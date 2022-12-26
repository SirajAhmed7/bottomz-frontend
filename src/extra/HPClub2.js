import React from 'react'
import "../css/ClubsRow.css"

export default function HPClubs(props) {
  return (
  <>
  <div className='col-md p-2 m-2'>
    <div className="card shadow" style={{width: "14rem", borderRadius: "20px"}}>
      <div>
    <img src="https://media.architecturaldigest.in/wp-content/uploads/2018/02/interior-design-trilogy-club-juhu-mumbai-club.jpg" style={{borderRadius: "12px"}} className="card-img-top" alt="..."/>
    </div>
    <div className="position-absolute w-100 d-flex flex-column" style={{color: "white", height: "100%"}}>
      <div className='d-flex mb-1 mx-2' style={{marginTop: "auto"}}>
        <h5 className="card-title m-0"><strong>{props.identity.name}</strong></h5>
        <i className=" ml-auto bi bi-heart"></i>
      </div>
      {/* <small>{props.identity.area}</small> */}
      {/* <div className="mt-2 d-flex" style={{color: "#ffbe5b"}}><i className="bi bi-star-fill mr-1" style={{fontSize: "13px", color: "warning"}}></i>{props.identity.rating}<small className="ml-auto" style={{color: "grey"}}>Starting from ₹{props.identity.cost}</small></div> */}
    </div>
    </div>
    </div>
  </>
  )
}