import "../../styles/components/overlaySettings.css";
import { THEMES, BUTTON_TYPE } from "../../context/SettingContext";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";

function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

const handleChange = (prevSettings, event, dispatch) => {
	let changedValue = event.target._wrapperState.initialValue;
	if (Object.values(THEMES).includes(changedValue)) {
		console.log("theme changed");
		// prevSettings["theme"] = changedValue;
		localStorage.setItem("theme", changedValue);
		// console.log(prevSettings);
		dispatch({type: "theme/themeChange", payload: changedValue});
	} else if (
		Object.values(BUTTON_TYPE).includes(changedValue.toUpperCase())
	) {
		changedValue = changedValue.toUpperCase();
		// console.log("button-type changed");
		prevSettings["buttonType"] = changedValue;
		localStorage.setItem("buttons", changedValue);
		// console.log(prevSettings);
		dispatch({type: "buttonType/buttonTypeChange", payload: changedValue});
	}
	return prevSettings;
};

export const OverlaySettings = (overlayActive) => {
	const settings = useSelector((store) => store);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	console.log(settings)

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
				onChange={(event) =>
					handleChange(settings, event, (action) => dispatch(action))
				}
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
			<form
				key="buttons"
				onChange={(event) =>
					handleChange(settings, event, () => navigate(0))
				}
			>
				{Object.values(BUTTON_TYPE).map((button_type) => (
					<React.Fragment key={button_type}>
						<input
							type="radio"
							name="button_type"
							value={button_type}
							defaultChecked={
								button_type ===
								settings["buttonType"].toUpperCase()
							}
						/>
						<label>
							{capitalizeFirstLetter(button_type.toLowerCase())}
						</label>
					</React.Fragment>
				))}
			</form>
		</div>
	);
};
