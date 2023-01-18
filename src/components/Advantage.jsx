import React from 'react';
import '../styles/Advantage.scss';

function Advantage({ direction, h2, p, src, alt }) {
	return (
		<div className={`advantage-cont adv-${direction}`}>
			<div className="adv-text-cont">
				<h2>{h2}</h2>
				<p>{p}</p>
			</div>
			<img className="adv-img" src={src} alt={alt} />
		</div>
	);
}

export default Advantage;
