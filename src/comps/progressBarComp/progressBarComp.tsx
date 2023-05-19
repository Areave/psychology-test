import {Line} from 'rc-progress';
import * as React from "react";

const ProgressBarComp = ({percent}: any) => {
    const style = {
        width: '100%',
        bottom: 0
    };
    return <>
        <Line percent={percent || 0}
              strokeWidth={1.3}
              strokeColor="#FF7A00"
              trailColor="#FFD900"
              strokeLinecap="square"
              style={style}/>
    </>
};

export default ProgressBarComp;