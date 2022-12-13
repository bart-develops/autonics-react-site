import React from 'react';
import '../styles/Contact.scss';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

function Contact() {
	return (
		<section>
			<div className="contact-cont">
				<h2>Contact us</h2>
				<div className="method">
					<BsFillTelephoneFill className="icon" />
					<p>+80 345 543 345 </p>
				</div>
				<div className="method">
					<MdEmail className="icon" />
					<p>autonics.example@gmail.com</p>
				</div>
			</div>
		</section>
	);
}

export default Contact;
