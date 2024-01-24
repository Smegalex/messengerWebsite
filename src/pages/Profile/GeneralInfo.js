import "../../styles/pages/Profile/Profile.css";

import React from "react";
import { Button } from "../../components/button/Button";
import { checkProfileChanges } from "./MOCK_PROFILE_DATA/CheckProfileChanges";


export const GeneralInfo = ({ profile_id, profileName, profileSurname, avatar, description, ref }) => {
	return (
		<div className="GeneralInfo__container">
			<div className="GeneralInfo__avatar_container">
				<img className="GeneralInfo__avatar" alt="avatar" src={avatar} />
			</div>
			<div className="GeneralInfo__text_container">
				<h2 className="profileCaption">{profileName} {profileSurname}</h2>
				<p className="aboutMe" contentEditable="true" ref={ref}>
					{description}
				</p>
			</div>
			<div className="saveButton">
				<Button
					size="LARGE"
					onClick={checkProfileChanges}
				>
					Save
				</Button>
			</div>
		</div>
	);
};
