import React from 'react';
import '../styles/Footer.scss';
import { Link } from 'react-router-dom';

function Footer() {
	return (
		<footer className="footer">
			<div className="column-cont">
				<ul className="col">
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
				</ul>
				<div className="line"></div>
				<ul className="col">
					<li>
						<Link to="/">Help</Link>
					</li>
					<li>
						<Link to="/">FaQ</Link>
					</li>
					<li>
						<Link to="/">Contact support</Link>
					</li>
				</ul>
				<div className="line"></div>
				<ul className="col">
					<li>
						<Link to="/">Privacy policy</Link>
					</li>
					<li>
						<Link to="/">Terms of service</Link>
					</li>
					<li>
						<Link to="/">Report issue</Link>
					</li>
				</ul>
			</div>
			<p>Copyright &copy; 2022</p>
		</footer>
	);
}

export default Footer;
