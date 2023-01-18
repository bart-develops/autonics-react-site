import React from 'react';
import '../styles/Advantage.scss';
import Advantage from './Advantage';
import { advantageData } from '../utils/data';

function AdvantageCont() {
	const advantagesSection = advantageData.map(({ src, h2, p, alt }, i) => {
		return (
			<Advantage
				key={i}
				src={src}
				h2={h2}
				p={p}
				direction={i % 2 ? 'l' : 'r'}
				alt={alt}
			/>
		);
	});

	return <section className="adv-sect-cont">{advantagesSection}</section>;
}

export default AdvantageCont;
