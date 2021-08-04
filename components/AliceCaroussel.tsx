import Image from 'next/image';
import AliceCarousel from 'react-alice-carousel';
import StylesHero from '../styles/Hero.module.css';

const handleDragStart = (e) => e.preventDefault();

const items = [
	<Image
		key={1}
		src='/assets/image.webp'
		width={1600}
		height={300}
		onDragStart={handleDragStart}
		className={StylesHero.addFull}
		alt='ad'
	/>,
	<Image
		key={2}
		src='/assets/image2.webp'
		width={1600}
		height={300}
		onDragStart={handleDragStart}
		className={StylesHero.addFull}
		alt='ad'
	/>,
	<Image
		key={3}
		src='/assets/image3.webp'
		width={1600}
		height={300}
		onDragStart={handleDragStart}
		alt='ad'
		className={StylesHero.addFull}
	/>,
];

const AliceCaroussel = () => {
	return (
		<>
			<AliceCarousel
				mouseTracking
				items={items}
				infinite
				disableDotsControls
				disableButtonsControls
				autoPlay
				animationDuration={1000}
				autoPlayInterval={10000}
				animationType='fadeout'
				// autoWidth={true}
			/>
		</>
	);
};

export default AliceCaroussel;
