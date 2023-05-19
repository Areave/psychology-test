import React from "react";
import './app.scss';
import {Provider} from 'react-redux'
import store from "../utils/store";
import 'materialize-css'
import MyRouter from "../utils/router";

const App: React.FC<any> = () => {
    return <React.StrictMode>
        {/*<ErrorBoundary>*/}
            <Provider store={store}>
                <MyRouter/>
            </Provider>
        {/*</ErrorBoundary>*/}
    </React.StrictMode>
};

export default App;