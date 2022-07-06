import React from "react";
import './errorPage.scss'
import {Types} from "../../utils/types";

const ErrorPage: React.FC<Types.ErrorPageProps> = ({errorMessage, errorStack}) => {
    return <div className='errorPage'>
        <div className='message'>error code is <div className='code'>
            {errorMessage}
            {errorStack}
        </div>
        </div>
    </div>
}

export default ErrorPage;
