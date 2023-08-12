import * as React from "react";
import * as ReactDOM from 'react-dom/client';
import {BrowserRouter, HashRouter} from 'react-router-dom'
import './index.scss'
import App from './App';
import {Provider} from "react-redux";
import {store} from "./redux/store/store";

console.log(process.env.PUBLIC_URL)

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
    <React.StrictMode>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);


