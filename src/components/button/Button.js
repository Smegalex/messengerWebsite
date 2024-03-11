import { useContext } from "react";
import "../../styles/components/Button.css";
import { useSelector } from "react-redux";

const BUTTON_TYPE = {
	NEGATIVE: "button-negative",
	POSITIVE: "button-positive",
};

const BUTTON_SIZE = {
	SMALL: "btn-s",
	MEDIUM: "btn-m",
	LARGE: "btn-l",
};

export const Button = ({ buttonType, size, onClick, children }) => {
	const defaultButton = useSelector((store) => store.buttonType);
	if (!buttonType) {
		buttonType = defaultButton;
	}
	if (!size) {
		size = "MEDIUM";
	}

	return (
		<button
			className={
				"button " + BUTTON_TYPE[buttonType] + " " + BUTTON_SIZE[size]
			}
		>
			{children}
		</button>
	);
};
