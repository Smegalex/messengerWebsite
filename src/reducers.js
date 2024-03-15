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

const initialState = {
	theme: THEMES["DEFAULT"],
	buttonType: BUTTON_TYPE.POSITIVE,
	language: LANGS.UA,
};

export default function appReducer(state = initialState, action) {
	// The reducer normally looks at the action type field to decide what happens
	switch (action.type) {
		// Do something here based on the different types of actions
		case "theme/themeChange":
			const [HTMLElement] = document.getElementsByTagName("html");
			HTMLElement.dataset.theme = THEMES[action.payload];
			return {
				...state,
				theme: THEMES[action.payload],
			};
		case "buttonType/buttonTypeChange":
			return {
				...state,
				buttonType: BUTTON_TYPE[action.payload],
			};
		case "language/langChange":
			return {
				...state,
				language: LANGS[action.payload],
			};
		default:
			// If this reducer doesn't recognize the action type, or doesn't
			// care about this specific action, return the existing state unchanged
			return state;
	}
}
