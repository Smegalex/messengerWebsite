import "../../styles/components/overlaySettings.css";
import { THEMES, BUTTON_TYPE } from "../../context/SettingContext";
import SettingContext from "../../context/SettingContext";
import React, { useContext, useEffect } from "react";

function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

const handleChange = (prevSettings, event) => {
	const changedValue = event.target._wrapperState.initialValue;
	if (Object.values(THEMES).includes(changedValue)) {
		console.log("theme changed");
		prevSettings["theme"] = changedValue;
		console.log(prevSettings);
		return prevSettings;
	} else if (changedValue in BUTTON_TYPE) {
	}
	return prevSettings;
};

export const OverlaySettings = (overlayActive) => {
	const { settings, setSettings } = useContext(SettingContext);
	// const updateSettings = (newSettings) => {setSettings(newSettings)};

	//settings = settings.initSettingValue;

	if (!overlayActive.overlayActive) {
		return <></>;
	}

	return (
		<div className="overlaySettings-wrapper">
			<h4 key="themes_capt">Theme</h4>
			<form
				key="themes"
				onChange={(event) => setSettings(handleChange(settings, event))}
			>
				{Object.values(THEMES).map((theme) => (
					<React.Fragment key={theme}>
						<input
							type="radio"
							name="theme"
							value={theme}
							defaultChecked={theme === settings["theme"]}
						/>
						<label>{capitalizeFirstLetter(theme)}</label>
					</React.Fragment>
				))}
			</form>
			<h4 key="buttons_capt">Buttons</h4>
			<form key="buttons">
				{Object.values(BUTTON_TYPE).map((button_type) => (
					<React.Fragment key={button_type}>
						<input
							type="radio"
							name="button_type"
							value={button_type}
							defaultChecked={
								button_type === settings["buttonType"]
							}
						/>
						<label>
							{capitalizeFirstLetter(button_type)}
						</label>
					</React.Fragment>
				))}
			</form>
		</div>
	);
};
