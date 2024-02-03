import { RouterProvider } from "react-router-dom";
import { ROUTES } from "./routes";
import React from "react";
import SettingContext from "./context/SettingContext";

export const RootView = (defaultSettingValue) => {
	defaultSettingValue = defaultSettingValue.defaultSettingValue;

	let initSettingValue = {
		theme: null,
		buttonType: null,
		language: null,
	};

	const theme = localStorage.getItem("theme");
	const buttons = localStorage.getItem("buttons");
	const language = localStorage.getItem("lang");

	//initialization
	if (
		initSettingValue.theme === null &&
		theme !== undefined &&
		theme !== null
	) {
		initSettingValue.theme = theme;
	} else if (theme === null && (theme === undefined || theme === null)) {
		initSettingValue.theme = defaultSettingValue.theme;
	}

	if (
		initSettingValue.buttonType === null &&
		buttons !== undefined &&
		buttons !== null
	) {
		initSettingValue.buttonType = buttons;
	} else if (
		initSettingValue.buttonType === null &&
		(buttons === undefined || buttons === null)
	) {
		initSettingValue.buttonType = defaultSettingValue.buttonType;
	}

	if (
		initSettingValue.language === null &&
		language !== undefined &&
		language !== null
	) {
		initSettingValue.language = language;
	} else if (
		initSettingValue.language === null &&
		(language === undefined || language === null)
	) {
		initSettingValue.language = defaultSettingValue.language;
	}

	const [HTMLElement] = document.getElementsByTagName("html");
	HTMLElement.dataset.theme = initSettingValue.theme;
	
	return (
		<React.Fragment>
			<SettingContext.Provider value={initSettingValue}>
				<RouterProvider router={ROUTES} />
			</SettingContext.Provider>
		</React.Fragment>
	);
};
