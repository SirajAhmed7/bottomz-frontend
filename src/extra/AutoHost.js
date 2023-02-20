import React from 'react';
import { useFormik } from 'formik'
import "../css/HostBarExtra.css"
import Input from '../common/Input';


export default function AutoHost() {
    const formik = useFormik({
        initialValues: {
            event_name: "",
            event_venue: "",
            curated_by: "",
            day: "",
            date: "",
            timings: "",
            genre: "",
            price: "",    
            description: "",    
            featuring: "",
            terms: [] 
        }})
console.log(formik.values)
  return (
    <div className='imPEHI leHLON'> 
        <div elevation="2" className='jksHKM uAaqh'>
            <div className='dLUKiG pr-1 pt-md-3 pt-2 pl-4'>
                <span color='yellow-8' size="18" letterSpacing="normal" className='fcxZkm'>Event Info</span>
            </div>
            <div className='dLUKiG pr-1 pt-md-3 pl-4'>
                <span className='fcxZkm'>Price Details</span>
            </div>
            <div className='dLUKiG pr-2 pt-md-3 pl-4'>
                <span className='fcxZkm'>Review</span>
            </div>
        </div>
      <div className='mt-4 ml-2'>
                <form className='d-flex flex-column' style={{height: "100%"}}>
                    <div className='d-flex'>
                    <div className='d-flex flex-column' style={{width: "60%"}}>
                        <label className='ml-2 mb-1'>Event Name:</label>
                        <Input name="event_name" handleChange={formik.handleChange} value={formik.values.event_name} placeholder="Enter Event Name"></Input>
                    </div>
                    <div className='d-flex flex-column'  style={{width: "40%"}}>
                        <label className='ml-2 mb-1'>Date:</label>
                        <Input name="date" handleChange={formik.handleChange} value={formik.values.date} type="date"></Input>
                    </div>
                    </div>
                <div className='d-flex'>
                    <div className='d-flex flex-column' style={{width: "60%"}}>
                        <label className='ml-2 mb-1'>Venue/Club Name:</label>
                        <Input name="event_venue" handleChange={formik.handleChange} value={formik.values.event_venue} placeholder="Enter Club Name"></Input>
                    </div>
                    <div className='d-flex flex-column' style={{width: "40%"}}>
                        <label className='ml-2 mb-1'>Day:</label>
                        <Input name="day" handleChange={formik.handleChange} value={formik.values.day} placeholder="Select"></Input>
                    </div>
                </div>
                <div className='d-flex'>
                    <div className='d-flex flex-column' style={{width: "60%"}}>
                        <label className='ml-2 mb-1'>Curated By:</label>
                        <Input name="curated_by" handleChange={formik.handleChange} value={formik.values.curated_by} placeholder="Enter Organizer Name"></Input>
                    </div>  
                    <div className='d-flex flex-column' style={{width: "40%"}}>
                        <label className='ml-2 mb-1'>Timings:</label>
                        <Input name="timings" handleChange={formik.handleChange} value={formik.values.timings} placeholder='00:00-00:00'></Input>
                    </div>  
                </div>
                <div className='d-flex'>
                    <div className='d-flex flex-column w-100'>
                        <label className='ml-2 mb-1'>Featuring:</label>
                        <Input name="featuring" handleChange={formik.handleChange} value={formik.values.featurings} placeholder="Enter Artist/Dj"></Input>
                    </div>  
                </div>
                <div className='d-flex'>
                    <div className='d-flex flex-column' style={{width: "50%"}}>
                        <label className='ml-2 mb-1'>Price:</label>
                        <Input name="price" handleChange={formik.handleChange} value={formik.values.price} placeholder="Select price range"></Input>
                    </div>  
                    <div className='d-flex flex-column' style={{width: "50%"}}>
                        <label className='ml-2 mb-1'>Genre:</label>
                        <Input name="genre" handleChange={formik.handleChange} value={formik.values.genre} placeholder="Select"></Input>
                    </div>  
                </div>
                <div className='d-flex flex-column w-100'>
                        <label className='ml-2 mb-1'>Description:</label>
                        <textarea name="description" onChange={formik.handleChange} value={formik.values.description} placeholder="About The Event" className="form-control ml-lg-2" style={{borderRadius: "20px", height: "100px"}}></textarea>
                </div>
                <button type="submit" className="btn mt-3 ml-2" style={{borderRadius: "20px", color: "#7d10bf", border: "1px solid #7d10bf", width: "100%"}}>Submit</button>
                </form>
         </div>
        <div>
        </div>
    </div>
  )
}
