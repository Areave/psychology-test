import React from 'react'
import './componentTitleComp.scss'
import {Types} from '../../utils/types'

const ComponentTitleComp: React.FC<Types.componentTitleCompProps> = ({title}) => {

    return <h3 className='componentTitleComp'>
        {title}
    </h3>
}

export default ComponentTitleComp;