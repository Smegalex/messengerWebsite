import '../styles/pages/Home.css';
import {MainLayout} from "../components/layout/MainLayout";
import {Button} from "../components/button/Button";

const NAME_OF_PAGE = 'Home';

export const Home = () => {
	return (
		<MainLayout currentPage={NAME_OF_PAGE}>
			<h1>Home page</h1>
			<Button buttonType="NEGATIVE" size="MEDIUM">Hello world!</Button>
		</MainLayout>
	)
}