import React from 'react'
import './pageTitle.scss'
import {Types} from '../../utils/types'

const PageTitle: React.FC<Types.PageTitleState> = (props: any) => {
    const {title} = props;
    return <h1 className="title">{title}</h1>
};

export default PageTitle;