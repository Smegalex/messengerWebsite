import { createContext } from "react";

export const THEMES = {
	LIGHT: "light",
	DARK: "dark",
	DEFAULT: "default",
};

export const BUTTON_TYPE = {
	NEGATIVE: "NEGATIVE",
	POSITIVE: "POSITIVE",
};

export const LANGS = {
	UA: "uk-UA",
	EN: "en-US",
};

const SettingContext = {
	// settings: {
		theme: null /*THEMES.DEFAULT*/,
		buttonType: null /*BUTTON_TYPE.POSITIVE*/,
		language: null,
	// },
	// setSettings: (newSettings) => {},
};

export default createContext(SettingContext);
