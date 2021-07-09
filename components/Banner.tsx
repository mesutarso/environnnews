/* eslint-disable @next/next/no-img-element */
import React from 'react';
import BannerStyle from '../styles/Banner.module.css';

interface BannerProps {
	titre: string;
	description: string;
}

const Banner: React.FC<BannerProps> = ({ titre, description }) => {
	return (
		<>
			<div className={`container  ${BannerStyle.mt_banner}`}>
				<div className='row justify-content-center'>
					<div className={`col-md-12 p-0 ${BannerStyle.position_relative}`}>
						<div className={BannerStyle.img_dark}></div>
						<img
							src='/assets/Plus_Récent.png'
							alt='image a la une'
							className={`w-100`}
						/>
						<div className={BannerStyle.img_position_absolute}>
							<h1
								className={`border-start border-success px-3 ${BannerStyle.banner_title}`}>
								{titre}
							</h1>
							<p className={BannerStyle.banner_description}>{description}</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Banner;
