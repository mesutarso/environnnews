import React from 'react'
import Lottie from 'react-lottie';

import './lottie.styled.scss'
 
const ComponentLottie = ({ animationData }) => {
 
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
 
    return( 
        <div className='container_lottie'>
            <Lottie 
                options={defaultOptions}
            />
        </div>
    )
}

export default ComponentLottie;