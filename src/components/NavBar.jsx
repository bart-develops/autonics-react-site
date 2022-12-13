import React, { useState, useEffect } from 'react';
import '../styles/NavBar.scss';
import { Link } from 'react-router-dom';
import { BiMenuAltRight, BiX } from 'react-icons/bi';

function NavBar() {
	const [isActive, setActive] = useState(false);

	const toggleClass = () => {
		setActive(!isActive);
	};

	var isSmall = window.innerWidth < 700 ? true : false;
	window.addEventListener('resize', () => {
		if (window.innerWidth <= 700) isSmall = true;
		else if (window.innerWidth > 700) isSmall = false;
	});

	useEffect(() => {
		if (window.innerWidth > 800) setActive(true);

		const handleResize = () => {
			if (window.innerWidth > 800) setActive(true);
		};

		window.addEventListener('resize', handleResize);
	}, [isActive]);

	return (
		<nav
			className="nav"
			style={{
				backgroundColor: isSmall && isActive ? '#222629d3' : 'transparent',
			}}
		>
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
