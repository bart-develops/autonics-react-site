import React from 'react';
import '../styles/Advantage.scss';

function Advantage(props) {
	return (
		<div className={`adv-cont adv-${props.direction}`}>
			<div className="adv-text-cont">
				<h2>{props.h2}</h2>
				<p>{props.p}</p>
			</div>
			<img className="adv-img" src={props.src} alt="" />
		</div>
	);
}

export default Advantage;
