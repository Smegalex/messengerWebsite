import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import {ROUTES} from "./routes";
import SettingContext from "./context/SettingContext";

const initSettingValue = {
    theme: 'light',
    buttonType: 'POSITIVE',
    language: localStorage.getItem('lang'),
};

const root = ReactDOM.createRoot(document.getElementById('root'));
const [HTMLElement] = document.getElementsByTagName('html');
HTMLElement.dataset.theme = initSettingValue.theme;

root.render(
  <React.Fragment>
    <SettingContext.Provider value={initSettingValue}>
        <RouterProvider router={ROUTES} />
    </SettingContext.Provider>
  </React.Fragment>
);