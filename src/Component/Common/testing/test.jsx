import React from 'react'
import '../../assets/Css/tableStyle.css'

const Testing = () => {

  return (
    //     <div className="circle-container">
    //     <div className="outter-circle">
    //         <div className='inner-circle'>
    //             <span className='center-number'>7</span>
    //             <div className="border-part part1"></div>
    //             <div className="border-part part2"></div>
    //             <div className="border-part part3"></div>
    //         </div>
    //     </div>
    //     <div className="outter-circle">
    //         <div className='inner-circle'>
    //             <span className='center-number'>5</span>
    //             <div className="border-part part1"></div>
    //             <div className="border-part part2"></div>
    //             <div className="border-part part3"></div>
    //         </div>
    //     </div>
    // </div>.
    //   <div className="circle">
    //   <div className="segment segment1"></div>
    //   <div className="segment segment2"></div>
    //   <div className="segment segment3"></div>
    //   <h3>sdlfsdjflj</h3>
    // </div>
    <div>
      <svg viewBox="0 0 50 50">
        <defs>
          <circle id="circle" cx="5" cy="5" r="4" strokeWidth="0.5" fill="transparent" />
        </defs>
        <use   xlinkHref="#circle" stroke="pink" strokeDasharray="0.1,2.3,7.38,30" />
        <use   xlinkHref="#circle" stroke="green" strokeDasharray="0,10.2,8.38,30" />
        <use   xlinkHref="#circle" stroke="orange" strokeDasharray="2.1,16.75,6.3" />
      </svg>
    </div>

  )
}

export default Testing