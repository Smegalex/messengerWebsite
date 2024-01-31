<<<<<<< Updated upstream
import '../../styles/components/MainLayout.css';

import {Header} from "../header/Header";

export const MainLayout = ({ currentPage, children }) => {
	return (
		<div className="page-wrapper">
			<Header currentPage={currentPage} />
			<div className="children-container">
				{children}
			</div>
		</div>
	)
}
=======

import "../../styles/components/MainLayout.css";

import { Header } from "../header/Header";
import { OverlaySettings } from "../OverlaySettings/OverlaySettings";
import {useState } from "react";

export const MainLayout = ({ currentPage, children }) => {
	let [overlayActive, setOverlayActive] = useState(false);



	return (
		<div className="page-wrapper">
			<Header
				currentPage={currentPage}
				changeOverlay={() => setOverlayActive(!overlayActive)}
			/>
			<OverlaySettings
				overlayActive={overlayActive}
			/>
			{children}
		</div>
	);
};
>>>>>>> Stashed changes
