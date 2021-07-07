import React from 'react';
import Image from 'next/image';
import img from '../public/assets/Plus_Récent.png';
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
					<div className={`col-12 p-0 ${BannerStyle.position_relative}`}>
						<div className={BannerStyle.img_dark}></div>
						<Image
							src={img}
							alt='image a la une'
							width={1400}
							className={`w-100 p-0 m-0 ${BannerStyle.height}`}
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
