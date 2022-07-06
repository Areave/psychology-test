import React from 'react';
import ErrorPage from './errorPage';
import {Types} from '../../utils/types'
import {setError, setImageSrc} from "../../utils/store/actionCreators";
import {connect} from "react-redux";


const ErrorBoundary: React.FC<Types.ErrorState> = (props) =>  {
    // constructor(props: any) {
    //     super(props);
    //     this.state = {
    //         error: null,
    //         errorInfo: null,
    //         isError: false
    //     };
    // }

    // componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    //     this.setState({error, errorInfo}, ()=>{
    //         console.log(this.state);
    //     });
    //
    // }


    // render() {
        if (props.isError) {
            // return <ErrorPage errorMessage={this.state.error.toString()} errorStack={this.state.errorInfo.componentStack}/>
            return <h1>ERRORRRR</h1>
        }
        return <>{props.children}</>
    // }
};


const mapStateToProps = (state: Types.State) => {
    return {isError: state.isError}
};

export default connect(mapStateToProps)(ErrorBoundary);