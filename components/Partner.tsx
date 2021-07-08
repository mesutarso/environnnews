/* eslint-disable @next/next/no-img-element */

import React, { useState } from 'react';
import AboutStyle from '../styles/About.module.css';

export interface PartnerProps {
	partner: {
		id: number;
		image: string;
		alt: string;
	}[];
}

export const Partner = ({ image, alt }) => {
	return (
		<>
			<div className='col-md-2 text-center'>
				<img src={image} alt={alt} className='img-fluid' />
			</div>
		</>
	);
};

export const Partners = ({ partner }) => {
	return partner.map((partner) => (
		<Partner key={partner.id} image={partner.image} alt={partner.alt} />
	));
};

const PartnerSection = () => {
	const [parter] = useState<PartnerProps['partner']>([
		{
			id: 1,
			image: '/assets/afd1.png',
			alt: 'logo de partner afd 1',
		},
		{
			id: 2,
			image: '/assets/giz1.png',
			alt: 'logo de partner afd 1',
		},
		{
			id: 3,
			image: '/assets/hirondelle1.png',
			alt: 'logo de partner afd 1',
		},
		{
			id: 4,
			image: '/assets/snel1.png',
			alt: 'logo de partner afd 1',
		},
		{
			id: 5,
			image: '/assets/wwf1.png',
			alt: 'logo de partner afd 1',
		},
	]);
	return (
		<div className={`mt-3 mb-0`}>
			<div className='container-fluid bg-light p-5'>
				<div className='row justify-content-center'>
					<div className='col-12 mb-5'>
						<h3 className={`text-center ${AboutStyle.title}`}>
							<span className='border-start border-success border-5 px-2'>
								ILS NOUS FONT CONFIANCE
							</span>
						</h3>
					</div>
					<Partners partner={parter} />
				</div>
			</div>
		</div>
	);
};

export default PartnerSection;
