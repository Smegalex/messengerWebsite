import {MainLayout} from "../components/layout/MainLayout";
import {Button} from "../components/button/Button";

const NAME_OF_PAGE = 'Profile';

export const Profile = () => {
	return (
		<MainLayout currentPage={NAME_OF_PAGE}>
			<h1>Profile page</h1>
			<Button>How r u?</Button>
		</MainLayout>
	)
}