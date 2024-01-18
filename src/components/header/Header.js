import '../../styles/components/Header.css';

import {Link} from "react-router-dom";
import {NavigationElements} from "./navigationElements";
import {SearchBar} from "../SearchBar/SearchBar";

export const Header = ({ currentPage }) => {

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
			<SearchBar />
		</header>
	)
}