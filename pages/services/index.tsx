/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import serviceStyles from '../../styles/Services.module.css';
import AboutStyle from '../../styles/About.module.css';
import { FaEdit, FaCaretRight, FaBullhorn } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

interface IVideos {
	video: {
		videoId: string;
	}[];
}

interface IInfography {
	infography: {
		image_path: string;
		label: string;
	}[];
}

const Services = () => {
	const [spot, setSpot] = useState<IVideos['video']>([
		{ videoId: 'FSAcjnnRRv4' },
		{ videoId: 'nS10PWcS8o8' },
		{ videoId: 'u8jOlC1LMZk' },
		{ videoId: '7mcMOWvL9rg' },
	]);
	const [motionDesign, setMotionDesign] = useState<IVideos['video']>([
		{ videoId: 'ZXI9H9OPpug' },
		{ videoId: 'qF74PxT2L3U' },
		{ videoId: 'myfPAkGDci8' },
		{ videoId: 'fE5xTw5TFs8' },
	]);
	const [documentary, setSDocumentary] = useState<IVideos['video']>([
		{ videoId: 'fE5xTw5TFs8' },
		{ videoId: 'PLPWF9iGWoY' },
		{ videoId: 'V9_H3xyfI-Q' },
		{ videoId: '5tX_YcM7zV4' },
	]);

	const [infography, setInfography] = useState<IInfography['infography']>([
		{ image_path: '/assets/services/Cap_black.webp', label: 'Cap Black' },
		{ image_path: '/assets/services/Cap.webp', label: 'Cap' },
		{ image_path: '/assets/services/Blank-tshirt.webp', label: 'Tshirt Black' },
		{
			image_path: '/assets/services/Banderole-INPESS.webp',
			label: 'Banderole-INPESS',
		},
	]);
	return (
		<div className={`container ${serviceStyles.content}`}>
			<h3 className={`text-center ${AboutStyle.title}`}>
				<span className='border-start border-success border-5 px-2'>
					SERVICES
				</span>
			</h3>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo, et amet
				tristique in nunc tempor. Dignissim orci in vitae sodales iaculis tempor
				vel molestie nunc. Est dui eget nibh amet lectus leo aliquam facilisis
				bibendum. Aliquet enim arcu consequat, magna nunc nec fermentum aliquet.
			</p>

			<div className={`row ${serviceStyles.menu}`}>
				<div className={`col-4 col-md-2 ${serviceStyles.menu_item}`}>
					<Link href='#redaction' passHref>
						<a>
							<img
								src='/icons/redaction.svg'
								alt='Redaction'
								className={`img-fluid  mx-auto d-block ${serviceStyles.item_image}`}
							/>
							<span>REDACTION</span>
						</a>
					</Link>
				</div>
				<div className={`col-4 col-md-2  ${serviceStyles.menu_item}`}>
					<Link href='#infographie' passHref>
						<a>
							<img
								src='/icons/ingographie.svg'
								alt='infographie'
								className={`img-fluid  mx-auto d-block ${serviceStyles.item_image}`}
							/>
							<span>INFOGRAPHIE</span>
						</a>
					</Link>
				</div>
				<div className={`col-4 col-md-2  ${serviceStyles.menu_item}`}>
					<Link href='#documentaire' passHref>
						<a>
							<img
								src='/icons/documentaire.svg'
								alt='documentaire'
								className={`img-fluid  mx-auto d-block ${serviceStyles.item_image}`}
							/>
							<span>DOCUMENTAIRE</span>
						</a>
					</Link>
				</div>
				<div className={`col-4 col-md-2  ${serviceStyles.menu_item}`}>
					<Link href='#motion_design' passHref>
						<a>
							<img
								src='/icons/motion.svg'
								alt='motion'
								className={`img-fluid  mx-auto d-block ${serviceStyles.item_image}`}
							/>
							<span>MOTION DESIGN</span>
						</a>
					</Link>
				</div>
				<div className={`col-4 col-md-2  ${serviceStyles.menu_item}`}>
					<Link href='#spot_pub' passHref>
						<a>
							<img
								src='/icons/spot_pub.svg'
								alt='Spot Publicitaire'
								className={`img-fluid  mx-auto d-block ${serviceStyles.item_image}`}
							/>
							<span>SPOT PUBLICITAIRE</span>
						</a>
					</Link>
				</div>
			</div>
			<section id='redaction'>
				<h5
					className={`border-start px-3 border-success border-5 ${serviceStyles.sub_title}`}>
					REDACTION
				</h5>
				<div
					className='row'
					style={{
						marginLeft: '2px',
						paddingTop: '20px',
						paddingBottom: '20px',
					}}>
					<div className={`col-md-8 col-sm-12 ${serviceStyles.divider}`}>
						<h5
							className='text-success py-3'
							style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>
							UNE EQUIPE COMPETANTE
						</h5>
						<span className='py-1'>
							Nous disponsons d'une equipe competante passionné par
							l'environnement. Disposant d’une expertise avérée dans la
							conception et implémentation des campagnes médiatiques.
						</span>
						<h5
							className='text-success py-3'
							style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>
							UNE EQUIPE COMPETANTE
						</h5>
						<span className='py-1'>
							Nous disponsons d'une equipe competante passionné par
							l'environnement. Disposant d’une expertise avérée dans la
							conception et implémentation des campagnes médiatiques.
						</span>
						<h5
							className='text-success py-3'
							style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>
							UNE EQUIPE COMPETANTE
						</h5>
						<span className='py-2'>
							Nous disponsons d'une equipe competante passionné par
							l'environnement. Disposant d’une expertise avérée dans la
							conception et implémentation des campagnes médiatiques.
						</span>
						<br />
						<h6 className='text-success' style={{ paddingTop: '20px' }}>
							<Link href='/' passHref>
								<a>
									Lire les articles
									<FaCaretRight />
								</a>
							</Link>
						</h6>
					</div>
					<div className={`col-md-1 col-sm-12`}></div>
					<div className={`col-md-3 col-sm-12 ${serviceStyles.pub}`}></div>
				</div>
			</section>
			<section id='infographie'>
				<h5
					className={`border-start px-3 border-success border-5 ${serviceStyles.sub_title}`}>
					INFOGRAPHIE
				</h5>
				<div
					className='row'
					style={{
						marginLeft: '2px',
						paddingTop: '20px',
						paddingBottom: '20px',
					}}>
					<div className={`col-md-5 col-sm-12 ${serviceStyles.divider}`}>
						<Image
							src='/assets/services/graphique-design.webp'
							height={350}
							width={500}
							alt='image info'
						/>
					</div>
					<div className={`col-md-7 col-sm-12`}>
						<h6 className='text-success'>SERVICES PROPOSES</h6>
						<ul>
							<li>Étude de votre projet</li>
							<li>Rédaction du Cahier des Charges</li>
							<li>Retouche Photo</li>
							<li>Création de graphique sur-mesure</li>
							<li>Intégration des ameliorations</li>
							<li>Livraison du produit</li>
						</ul>
						<h6 className='text-success'>LIRE ET FAIRE LIRE NOS ARTICLES</h6>
						<p>
							L'infographie est le domaine de la création d'images numériques
							assistée par ordinateur. Cette activité est liée aux arts
							graphiques.
						</p>
					</div>
					<div className={`col-md-2 col-sm-12`}></div>
				</div>
				<h6
					className='text-center text-success '
					style={{ marginBottom: '20px' }}>
					REALISATIONS
				</h6>

				<div className='row'>
					{infography.map((info, index) => (
						<div className='col-md-3' key={index}>
							<img
								width={270}
								height={250}
								src={info.image_path}
								alt={info.label}
								style={{ objectFit: 'cover' }}
							/>
						</div>
					))}
				</div>
			</section>
			<section id='documentaire'>
				<h5
					className={`border-start px-3 border-success border-5 ${serviceStyles.sub_title}`}>
					DOCUMENTAIRE
				</h5>
				<div
					className='row'
					style={{
						marginLeft: '2px',
						paddingTop: '20px',
						paddingBottom: '20px',
					}}>
					<div className={`col-md-5 col-sm-12 ${serviceStyles.divider}`}>
						<Image
							src='/assets/documentaire.jpg'
							height={350}
							width={500}
							alt='image info'
						/>
					</div>
					<div className={`col-md-7 col-sm-12`}>
						<h6 className='text-success'>SERVICES PROPOSES</h6>
						<ul>
							<li>Étude de votre projet</li>
							<li> Brief & Scénario</li>
							<li>Animation</li>
							<li> Sound Design</li>
							<li>Livraison du produit</li>
						</ul>
						<h6 className='text-success'>LIRE ET FAIRE LIRE NOS ARTICLES</h6>
						<p>
							« Film de caractère didactique ou informatif qui vise
							principalement à restituer les apparences de la réalité » 1, le
							documentaire — tel un document administratif — est présenté comme
							une preuve de l’existence d’un phénomène technique, sociétal
							(humain ou animal), ou historique, dont il veut établir une
							description minutieuse, voire en tenter l’explication.
						</p>
					</div>
					<div className={`col-md-2 col-sm-12`}></div>
				</div>
				<h6
					className='text-center text-success '
					style={{ marginBottom: '20px' }}>
					REALISATIONS
				</h6>

				<div className='row'>
					{documentary.map((doc, index) => (
						<div className='col-md-3' key={index}>
							<iframe
								width='270'
								height='200'
								src={`https://www.youtube.com/embed/${doc.videoId}`}
								frameBorder='1'
								allow='accelerometer; autoPlay; clipboardWrite; encryptedMedia; gyroscope; pictureInPicture'
								allowFullScreen
								title='Embedded youtube'
							/>
						</div>
					))}
				</div>
				<h6 className='text-success' style={{ paddingTop: '20px' }}>
					<Link href='/' passHref>
						<a>
							Voir plus de vidéos
							<FaCaretRight />
						</a>
					</Link>
				</h6>
			</section>
			<section id='motion_design'>
				<h5
					className={`border-start px-3 border-success border-5 ${serviceStyles.sub_title}`}>
					MOTION DESIGN
				</h5>
				<div
					className='row'
					style={{
						marginLeft: '2px',
						paddingTop: '20px',
						paddingBottom: '20px',
					}}>
					<div className={`col-md-5 col-sm-12 ${serviceStyles.divider}`}>
						<Image
							src='/assets/md.jpg'
							height={350}
							width={500}
							alt='motion design'
						/>
					</div>
					<div className={`col-md-7 col-sm-12`}>
						<h6 className='text-success'>SERVICES PROPOSES</h6>
						<ul>
							<li>Étude de votre projet</li>
							<li> Brief & Scénario</li>
							<li>Storyboard</li>
							<li>Maquettage</li>
							<li>Animation</li>
							<li> Sound Design</li>
							<li>Livraison du produit</li>
						</ul>
						<h6 className='text-success'>LIRE ET FAIRE LIRE NOS ARTICLES</h6>
						<p>
							Le motion design, aussi appelé animation graphique, graphisme
							animé, conception du mouvement ou conception graphique animée est
							une forme d'art visuel consistant à créer des œuvres animées ; il
							implique d'utiliser le mouvement comme principal outil graphique
							et artistique.
						</p>
					</div>
					<div className={`col-md-2 col-sm-12`}></div>
				</div>

				<h6
					className='text-center text-success '
					style={{ marginBottom: '20px' }}>
					REALISATIONS
				</h6>

				<div className='row'>
					{motionDesign.map((doc, index) => (
						<div className='col-md-3' key={index}>
							<iframe
								width='270'
								height='200'
								src={`https://www.youtube.com/embed/${doc.videoId}`}
								frameBorder='1'
								allow='accelerometer; autoPlay; clipboardWrite; encryptedMedia; gyroscope; pictureInPicture'
								allowFullScreen
								title='Embedded youtube'
							/>
						</div>
					))}
				</div>
				<h6 className='text-success' style={{ paddingTop: '20px' }}>
					<Link href='/' passHref>
						<a>
							Voir plus de vidéos
							<FaCaretRight />
						</a>
					</Link>
				</h6>
			</section>
			<section id='spot_pub'>
				<h5
					className={`border-start px-3 border-success border-5 ${serviceStyles.sub_title}`}>
					SPOT PUBLICITAIRE
				</h5>
				<div
					className='row'
					style={{
						marginLeft: '2px',
						paddingTop: '20px',
						paddingBottom: '20px',
					}}>
					<div className={`col-md-5 col-sm-12 ${serviceStyles.divider}`}>
						<Image
							src='/assets/spot.jpg'
							height={350}
							width={500}
							alt='spot publicitaire'
						/>
					</div>
					<div className={`col-md-7 col-sm-12`}>
						<h6 className='text-success'>SERVICES PROPOSES</h6>
						<ul>
							<li>Étude de votre projet</li>
							<li>Rédaction du Cahier des Charges</li>
							<li>Création d'un spot sur-mesure</li>
							<li>Intégration des ameliorations</li>
							<li>Livraison du produit</li>
						</ul>
						<h6 className='text-success'>LIRE ET FAIRE LIRE NOS ARTICLES</h6>
						<p>
							Le motion design, aussi appelé animation graphique, graphisme
							animé, conception du mouvement ou conception graphique animée est
							une forme d'art visuel consistant à créer des œuvres animées ; il
							implique d'utiliser le mouvement comme principal outil graphique
							et artistique.
						</p>
					</div>
					<div className={`col-md-2 col-sm-12`}></div>
				</div>

				<h6
					className='text-center text-success '
					style={{ marginBottom: '20px' }}>
					REALISATIONS
				</h6>

				<div className='row'>
					{spot.map((doc, index) => (
						<div className='col-md-3' key={index}>
							<iframe
								width='270'
								height='200'
								src={`https://www.youtube.com/embed/${doc.videoId}`}
								frameBorder='1'
								allow='accelerometer; autoPlay; clipboardWrite; encryptedMedia; gyroscope; pictureInPicture'
								allowFullScreen
								title='Embedded youtube'
							/>
						</div>
					))}
				</div>

				<h6 className='text-success' style={{ paddingTop: '20px' }}>
					<Link href='/' passHref>
						<a>
							Voir plus de vidéos
							<FaCaretRight />
						</a>
					</Link>
				</h6>
			</section>
		</div>
	);
};

export default Services;
