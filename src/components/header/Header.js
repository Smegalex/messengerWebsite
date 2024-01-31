import '../../styles/components/Header.css';

import { Link } from "react-router-dom";
import { NavigationElements } from "./navigationElements";
import { SearchBar } from "../SearchBar/SearchBar";

import cogwheel from "../../images/cogwheel.png";

export const Header = ({ currentPage, changeOverlay }) => {

	return (
		<header className="header">
			<nav>
				<ul>
					{NavigationElements.map((element) => (
						<li key={element.title}>
							<Link to={element.link} className={currentPage === element.title ? 'active' : ''}>
								{element.title}
							</Link>
						</li>
					))}
				</ul>
			</nav>
			<div className='search-wrapper'><SearchBar /></div>
			<div className='settingsIcon-container'><a onClick={changeOverlay}><img className='settingsIcon' src={cogwheel} alt='cogwheel'></img></a></div>
		</header>
	)
}