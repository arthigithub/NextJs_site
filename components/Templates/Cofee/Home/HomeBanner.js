import React, { useContext, useEffect} from "react";
import { HomeSectionCtx } from "../../../../store/home-context";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const HomeBanner = () => {
  const { banner } = useContext(HomeSectionCtx);
//   useEffect(()=>{
//     const interval = setInterval(()=>{
//         AOS.init({
//             duration: 700,
//             delay: 50,
//         });
//         AOS.refresh();
//     }, 1000);
//     return()=>{
//         clearInterval(interval);
//     };
//   },[]);
useEffect(()=>{
    AOS.init();
    AOS.refresh();
},[]);
  return (
    <>
    <section className="main-slider">
        <div className="banner-carousel owl-carousel owl-theme">
        {banner.map((item, i) => {
              return (
                <div key={i} className="ban-block">
                    <div className="auto-container">
                        <div className="row justify-content-center">
                            <div className="col-md-6">
                                <div className="slider-content">
                                    <h2 data-aos="fade-right">
                                        <span>{item.title}</span>
                                        <div>{item.sub_title}</div>
                                    </h2>
                                    <div className="text" data-aos="fade-right" data-aos-delay="300">{item.description}</div>
                                    <div className="btns-box" data-aos="fade-right">
                                        <a href="#" className="theme-btn btn-style-one">
                                        <span className="icon flaticon-right-arrow-1"></span>Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6" data-aos="fade-left">
                                <img src={item.thumbimg} alt="" className="slider-img"  />
                            </div>
                        </div>
                    </div>
                </div>
             );
            })}
        </div>
    </section>
    </>
  );
};

export default HomeBanner;
