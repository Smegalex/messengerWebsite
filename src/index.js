import "./index.css";

import { RouterProvider } from "react-router-dom";
import { ROUTES } from "./routes";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import appReducer, { THEMES, BUTTON_TYPE, LANGS } from "./reducers";

let preloadedState = {};
const theme = localStorage.getItem("theme");
const buttons = localStorage.getItem("buttons");
const language = localStorage.getItem("lang");

if (theme) {
	preloadedState.theme = theme;
}
if (buttons) {
	preloadedState.buttonType = BUTTON_TYPE[buttons];
}
if (language) {
	preloadedState.language = LANGS[language];
}

console.log(preloadedState)

const store = configureStore({
    reducer: appReducer,
    preloadedState: preloadedState,
});

export default store;

// const [HTMLElement] = document.getElementsByTagName("html");
// HTMLElement.dataset.theme = preloadedState.theme;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Provider store={store}>
		<React.Fragment>
				<RouterProvider router={ROUTES} />
		</React.Fragment>
	</Provider>
);
