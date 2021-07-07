import React from 'react';
import Image from 'next/image';
import img from '../public/assets/Plus_Récent.png';
import BannerStyle from '../styles/Banner.module.css';

const Banner: React.FC = () => {
	return (
		<>
			<div
				className={`container-fluid d-flex border justify-content-center ${BannerStyle.mt_container}`}>
				<div className='row'>
					<div className='col-12'>
						<Image src={img} alt='image a la une' className='' width={1270} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Banner;
