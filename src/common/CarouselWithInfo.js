import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const CarouselWithInfo = ({ items }) => {
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      keyBoardControl={true}
      arrows={false}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {items?.map((item) => {
      const formatDate = (dateStr) => {
        const [day, month, year] = dateStr.split("-");
        const date = new Date(year, month - 1, day);
        const options = { day: 'numeric', month: 'short' };
        return date.toLocaleDateString('en-US', options);
      }    
      return(
        <div style={{height: '100%'}}>
          <div className="d-flex w-100 p-3 my-4">
            <div className="p-2 col-lg-4 col-12 col-md-5 mx-md-5 my-auto" style={{height: "230px", width: "100%", border: "7px solid white", borderRadius: "15px"}}>
              <div style={{background: `url(${item?.images_url}) no-repeat center/cover`, height: "100%", width: "100%", filter: "blur(3px)"}}></div>
              <img style={{position: "absolute", top: "50%", left: "50%",transform: "translate(-50%, -50%)", height: "100%"}} src={item?.images_url} alt=""/>
              </div>
              <div className="col-lg-5 d-none col-md-5 d-md-flex flex-column justify-content-center">
              <h2 className="primary-header mb-4" style={{color: "white"}}>{item?.event_name}</h2>
              <p className="" style={{color: "white"}}><i class="fa-regular fa-paper-plane mr-2"></i>{item?.event_venue}</p>
              <p className="" style={{color: "white"}}><i class="fa-regular fa-calendar mr-2"></i>{item?.timings.slice(0,9)} • {formatDate(item?.date)}</p>
              <div><button className="btn btn-primary px-4 rounded-pill my-3 py-2" style={{background: "white", color: "black", fontWeight: "700"}}>See Now</button></div>
              </div>
              <div className="col-lg-3">

              </div>
          </div>
        </div>
        )})}
            </Carousel>
          );
        };

export default CarouselWithInfo;
