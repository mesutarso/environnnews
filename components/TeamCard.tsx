/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';
import TeamProfile from '../public/assets/benie.jpg';
import TeamCardStyle from './../styles/TeamCard.module.css';

const TeamCard = ({ contact }) => {
	return (
		<>
			<div className='text-center p-3'>
				<img
					src={contact.node.featuredImage.node.sourceUrl}
					className='img-fluid rounded-circle'
					alt='profile Environnews'
				/>
				<div className='mt-4'>
					<h5 className={`${TeamCardStyle.text} ${TeamCardStyle.name}`}>
						{contact.node.title}
					</h5>
					<h6 className={`text-success ${TeamCardStyle.text}`}>
						{contact.node.roles.edges.map((roles) => {
							return <span key={roles.node.name}>{roles.node.name} </span>;
						})}
					</h6>
				</div>
			</div>
		</>
	);
};

export default TeamCard;
