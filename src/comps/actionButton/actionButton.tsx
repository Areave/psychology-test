import React from 'react'
import './actionButton.scss'
import {Types} from '../../utils/types'

const ActionButton: React.FC<Types.ActionButtonProps> = ({label, onClick}) => {
    return <button className='actionButton'
                   onClick={onClick}>
        {label}
    </button>
};

export default ActionButton;