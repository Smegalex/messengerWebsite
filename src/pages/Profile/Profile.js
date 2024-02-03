import "../../styles/pages/Profile.css"

import {MainLayout} from "../../components/layout/MainLayout";
import {GeneralInfo} from "./GeneralInfo";
import MOCK_PROFILE_DATA from "./MOCK_PROFILE_DATA/MOCK_PROFILE_DATA.json";

const NAME_OF_PAGE = 'Profile';

export const Profile = () => {
	return (
		<MainLayout currentPage={NAME_OF_PAGE}>
			<div className="profile__container">
			<GeneralInfo {...MOCK_PROFILE_DATA}/>
			</div>
		</MainLayout>
	)
}