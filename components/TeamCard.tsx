import React from 'react';
import Image from 'next/image';
import TeamProfile from '../public/assets/benie.jpg';
import TeamCardStyle from './../styles/TeamCard.module.css';

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
					<h5 className={`${TeamCardStyle.text} ${TeamCardStyle.name}`}>
						Annie TOWELA
					</h5>
					<h6 className={`text-success ${TeamCardStyle.text}`}>
						Reporter en Chef
					</h6>
					<p className={`${TeamCardStyle.text}`}>
						Présentatrice de l&apos;emission Informatique verte
					</p>
				</div>
			</div>
		</>
	);
};

export default TeamCard;
