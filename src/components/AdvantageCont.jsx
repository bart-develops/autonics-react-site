import React from 'react';
import '../styles/Advantage.scss';
import Advantage from './Advantage';
import nuts from '../img/nuts.webp';
import cpu from '../img/cpu.webp';
import engineers from '../img/engineers.webp';
import market from '../img/market.webp';

function AdvantageCont() {
	const data = {
		_1: {
			src: nuts,
			h2: 'Thoroughness of fulfilment',
			p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit sem nec diam finibus pulvinar. Sed quis tellus leo. Vivamus quis consequat enim. Donec elementum maximus tincidunt.',
		},
		_2: {
			src: cpu,
			h2: 'Use of the newest technologies',
			p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit sem nec diam finibus pulvinar. Sed quis tellus leo. Vivamus quis consequat enim. Donec elementum maximus tincidunt.',
		},
		_3: {
			src: engineers,
			h2: 'Our staff are experts',
			p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit sem nec diam finibus pulvinar. Sed quis tellus leo. Vivamus quis consequat enim. Donec elementum maximus tincidunt.',
		},
		_4: {
			src: market,
			h2: "We've been on the market for over 15 years",
			p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit sem nec diam finibus pulvinar. Sed quis tellus leo. Vivamus quis consequat enim. Donec elementum maximus tincidunt.',
		},
	};

	return (
		<section className="adv-sect-cont">
			<Advantage
				src={data._1.src}
				h2={data._1.h2}
				p={data._1.p}
				direction={'r'}
			/>
			<Advantage
				src={data._2.src}
				h2={data._2.h2}
				p={data._2.p}
				direction={'l'}
			/>
			<Advantage
				src={data._3.src}
				h2={data._3.h2}
				p={data._3.p}
				direction={'r'}
			/>
			<Advantage
				src={data._4.src}
				h2={data._4.h2}
				p={data._4.p}
				direction={'l'}
			/>
		</section>
	);
}

export default AdvantageCont;
