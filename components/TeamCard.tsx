import React from 'react';
import Image from 'next/image';
import TeamProfile from '../public/assets/benie.jpg';

const TeamCard = () => {
	return (
		<>
			<div className='text-center p-3'>
				<Image
					src={TeamProfile}
					className='img-fluid rounded-circle'
					alt='profile Environnews'
					width={150}
					height={150}
				/>
				<div className='mt-2'>
					<h5 style={{ fontWeight: 'bold' }}>Annie TOWELA</h5>
					<h6 className='text-success'>Reporter en Chef</h6>
					<h6>Présentatrice de l&apos;emission</h6>
					<h6>Informatique verte</h6>
				</div>
			</div>
		</>
	);
};

export default TeamCard;
