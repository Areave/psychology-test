import React from 'react'
import './imageComp.scss'
import {Types} from '../../utils/types'

const ImageComp: React.FC<Types.ImageCompState> = ({src}) => {
    return <div className='imageComp'>
        <div className="imageWrapper">
            <img className='image' src={src} alt=""/>
            <button className='randomFaceButton'>set random face</button>
        </div>


    </div>
}

export default ImageComp;