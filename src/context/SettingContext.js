import { createContext } from "react";

const SettingContext = {
	theme: null,
	buttonType: null,
	language: null,
};

export default createContext(SettingContext);
