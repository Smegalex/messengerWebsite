import "./index.css";

<<<<<<< Updated upstream
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import {ROUTES} from "./routes";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={ROUTES} />
  </React.StrictMode>
);
=======
import ReactDOM from "react-dom/client";
import {
	THEMES,
	BUTTON_TYPE,
	LANGS,
} from "./context/SettingContext";
import { RootView } from "./App";

let defaultSettingValue = {
	theme: THEMES["DEFAULT"],
	buttonType: BUTTON_TYPE.POSITIVE,
	language: LANGS.UA,
};

// const theme = localStorage.getItem("theme");
// if (theme !== null && Object.values(THEMES).includes(theme)) {
// 	defaultSettingValue.theme = THEMES[theme];
// } else {
// 	localStorage.setItem("theme", defaultSettingValue.theme);
// }

// const buttons = localStorage.getItem("buttons");
// if (buttons !== null && Object.values(BUTTON_TYPE).includes(buttons)) {
// 	defaultSettingValue.buttonType = BUTTON_TYPE[buttons];
// } else {
// 	localStorage.setItem("buttons", defaultSettingValue.buttonType);
// }

// const language = localStorage.getItem("lang");
// if (language !== null && Object.values(LANGS).includes(language)) {
// 	defaultSettingValue.language = LANGS[language];
// } else {
// 	localStorage.setItem("lang", defaultSettingValue.language);
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RootView defaultSettingValue={defaultSettingValue} />);
>>>>>>> Stashed changes
