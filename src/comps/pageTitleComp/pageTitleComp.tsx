import React from 'react'
import './pageTitleComp.scss'
import {Types} from '../../utils/types'

const PageTitleComp: React.FC<Types.PageTitleProps> = (props: any) => {
    const {title} = props;
    return <h1 className="title">{title}</h1>
};

export default PageTitleComp;