import React from 'react';
import '../styles/Header.scss';
import NavBar from './NavBar';
import logo from '../img/autonics-slogan-dark.webp';
import robots from '../img/robots.webp';

function Header() {
	return (
		<>
			<NavBar />
			<header className="header">
				<img className="header-img" src={robots} alt="" />
				<div className="header-cont">
					<img className="header-logo" src={logo} alt="" />
					<div className="text-cont">
						<h1>Most reliable automatics manufacturer in Europe.</h1>
						<p>
							We provide high-quality means of automation and robotics for many
							companies in the world.
						</p>
					</div>
				</div>
			</header>
		</>
	);
}

export default Header;
