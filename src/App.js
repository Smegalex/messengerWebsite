import { RouterProvider } from "react-router-dom";
import { ROUTES } from "./routes";
import React, { useState, useEffect } from "react";
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

	const [settings, setSettings] = useState(initSettingValue);
	console.log(settings);

	useEffect(() => {
		if (!settings) return;

		console.log("changes in settings detected");
		const theme = localStorage.getItem("theme");
		const buttons = localStorage.getItem("buttons");
		const language = localStorage.getItem("lang");
		//update
		if (theme !== undefined && theme !== settings.theme) {
			console.log("theme set to", settings.theme);
			localStorage.setItem("theme", settings.theme);
		}

		if (buttons !== undefined && buttons !== settings.buttonType) {
			localStorage.setItem("buttons", settings.buttonType);
		}

		if (language !== undefined && language !== settings.language) {
			localStorage.setItem("lang", settings.language);
		}
	}, [settings]);
	return (
		<React.Fragment>
			<SettingContext.Provider value={{ settings, setSettings }}>
				<RouterProvider router={ROUTES} />
			</SettingContext.Provider>
		</React.Fragment>
	);
};
