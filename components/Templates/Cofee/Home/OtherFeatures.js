import React, { useContext } from 'react'
import { HomeSectionCtx } from '../../../../store/home-context';
import FeaturedBlock from './UI/FeaturedBlock';

const OtherFeatures = () => {    
  const {whychooseus} = useContext(HomeSectionCtx);
  return (
    <section className="featured-section-two featured-img">
    <div className="auto-container">
        <div className="sec-title centered">
            <h2>Why Chooseus</h2>
        </div>
        <div className="inner-container">
            <div className="clearfix">
                {
                    whychooseus.map((item, i)=>(
                        <FeaturedBlock key={i} data={item}/>
                    ))
                }
                
            </div>
        </div>
    </div>
</section>

  )
}

export default OtherFeatures