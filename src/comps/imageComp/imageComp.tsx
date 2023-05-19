import React from 'react'
import './imageComp.scss'
import {Types} from '../../utils/types'
import ComponentTitleComp from "../componentTitleComp/componentTitleComp";

const ImageComp: React.FC<Types.ImageCompProps> = ({imageSrc}) => {

    return <div className='imageComp'>
        <div className="pictureCard">
            <div className="imageWrapper">
                <img className='image' src={imageSrc} alt="П.Орид"/>
                <ComponentTitleComp title={'П.Орид, Берлин, 1912г.'}/>
            </div>
        </div>
    </div>
};

export default ImageComp;