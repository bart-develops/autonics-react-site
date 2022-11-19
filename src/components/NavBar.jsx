import React from 'react';
import '../styles/NavBar.scss';
import { Link } from 'react-router-dom';

function NavBar() {
	return (
		<nav>
			<ol>
				<li>
					<Link to="/">About us</Link>
				</li>
				<li>
					<Link to="/">Assortment</Link>
				</li>
				<li>
					<Link to="/">For companies</Link>
				</li>
				<li>
					<Link to="/">Careers</Link>
				</li>
			</ol>
		</nav>
	);
}

export default NavBar;
