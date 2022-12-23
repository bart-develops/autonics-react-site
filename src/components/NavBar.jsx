import React, { useState, useEffect } from 'react';
import '../styles/NavBar.scss';
import { Link } from 'react-router-dom';
import { BiMenuAltRight, BiX } from 'react-icons/bi';

function NavBar() {
	const [isActive, setActive] = useState(false);

	const toggleClass = () => {
		setActive(!isActive);
	};

	useEffect(() => {
		if (window.innerWidth > 700) setActive(true);

		const handleResize = () => {
			if (window.innerWidth > 700) setActive(true);
		};

		window.addEventListener('resize', handleResize);
	}, [isActive]);

	return (
		<nav className="nav">
			<ol className="nav-cont">
				{isActive && (
					<>
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
					</>
				)}
				<button className="menu-button" onClick={() => toggleClass()}>
					{isActive && <BiX />}
					{!isActive && <BiMenuAltRight />}
				</button>
			</ol>
		</nav>
	);
}

export default NavBar;
