/* eslint-disable @next/next/no-img-element */
import React from 'react';
import BannerStyle from '../styles/Banner.module.css';

interface BannerProps {
	titre: string;
	description: string;
	imageLink: string;
}

const Banner: React.FC<BannerProps> = ({ titre, description, imageLink }) => {
	return (
		<>
			<div className={`container  ${BannerStyle.mt_banner}`}>
				<div className='row justify-content-center'>
					<div className={`col-md-12 p-0 ${BannerStyle.position_relative}`}>
						<div className={BannerStyle.img_dark}></div>
						<img
							data-testid='img-banner'
							src={imageLink}
							alt='image a la une'
							className={`w-100 ${BannerStyle.image}`}
						/>
						<div className={BannerStyle.img_position_absolute}>
							<h1
								className={`border-start border-success px-3 ${BannerStyle.banner_title}`}>
								{titre}
							</h1>
							<p
								data-testid='banner-description'
								className={BannerStyle.banner_description}>
								{description}
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Banner;
