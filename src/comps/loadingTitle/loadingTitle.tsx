import React from 'react'
import './loadingTitle.scss'


const LoadingTitle: React.FC<{title: string, isLoading:boolean}> = ({title, isLoading}) => {
    return <div className='loadingTitle'>{title + ' ' + isLoading}</div>
}

export default LoadingTitle;