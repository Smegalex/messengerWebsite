
import "../../styles/components/MainLayout.css";

import { Header } from "../header/Header";
import { OverlaySettings } from "../overlaySettings/overlaySettings";
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
