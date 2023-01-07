import React from 'react'
import Input from '../common/Input'
import { useFormik } from 'formik'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import "../css/Login.css"

export default function Login() {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      email_id: "",
      password: ""
    },
    onSubmit: (values)=> {
      axios.post("https://nightlife-2710.herokuapp.com/login", values)
      .then((response)=>{
        localStorage.setItem('token', response.data.access_token)
        navigate("/")
      }
      )
    }
  })

  return ( 
        <div className='d-flex flex-column justify-content-center'>
            <div className="d-flex justify-content-center mt-3" style={{fontSize: "40px", fontWeight: "600"}}>
              Log In
            </div>
            <div className="mt-2 d-flex justify-content-center">
                <button type="button" className="btn btn-light" style={{border: "2px solid darkGray", borderRadius: "10px", width: "85%"}}><img src={process.env.PUBLIC_URL + "/images/Google_Icons-09-512.webp"} width="25px" alt=""/>Sign in with google</button>
            </div>
            <div className="mt-2 d-flex justify-content-center">
                <button type="button" className="btn btn-light" style={{border: "2px solid darkGray", borderRadius: "10px", width: "85%"}}><img src={process.env.PUBLIC_URL + "/images/apple-icon.png"} width="25px" alt=""/>Sign in with apple</button>
            </div>
            <hr className='rounded mx-auto' style={{width: "85%"}}/>
            <form>
            <Input name="email_id" type="email" value={formik.values.email_id} id="email_id"  handleChange={formik.handleChange} placeholder="Enter Your Email"/>
            <Input name="password" type="password" value={formik.values.password} id="password"  handleChange={formik.handleChange} placeholder="Enter Your Password!"/>
            <div className="mt-3 d-flex justify-content-center">
            <button type="submit" className="btn mb-3" onClick={formik.handleSubmit}>Continue</button>
            </div>
            </form>
        </div>
  )
}
