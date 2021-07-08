import React from 'react';
import serviceStyles from '../../styles/Services.module.css';
import AboutStyle from '../../styles/About.module.css';
import { FaEdit } from 'react-icons/fa';
import Link from 'next/link';

const Services = () => {
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

			<div className={serviceStyles.menu}>
				<div className={serviceStyles.menu_item}>
					<Link href='#redaction' passHref>
						<a>
							<FaEdit style={{ fontSize: '5rem', paddingBottom: '10px' }} />
							<h5>REDACTION</h5>
						</a>
					</Link>
				</div>
				<div className={serviceStyles.menu_item}>
					<Link href='#infographie' passHref>
						<a>
							<FaEdit style={{ fontSize: '5rem', paddingBottom: '10px' }} />
							<h5>INFOGRAPHIE</h5>
						</a>
					</Link>
				</div>
				<div className={serviceStyles.menu_item}>
					<Link href='#documentaire' passHref>
						<a>
							<FaEdit style={{ fontSize: '5rem', paddingBottom: '10px' }} />
							<h5>DOCUMENTAIRE</h5>
						</a>
					</Link>
				</div>
				<div className={serviceStyles.menu_item}>
					<Link href='#motion_design' passHref>
						<a>
							<FaEdit style={{ fontSize: '5rem', paddingBottom: '10px' }} />
							<h5>MOTION DESIGN</h5>
						</a>
					</Link>
				</div>
				<div className={serviceStyles.menu_item}>
					<Link href='#spot_pub' passHref>
						<a>
							<FaEdit style={{ fontSize: '5rem', paddingBottom: '10px' }} />
							<h5>SPOT PUBLICITQIRE</h5>
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
					<div className={`col-md-9 col-sm-12 ${serviceStyles.divider}`}>
						<h5
							className='text-success py-3'
							style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>
							UNE EQUIPE COMPETANTE
						</h5>
						<span>
							Nous disponsons d'une equipe competante passionné par
							l'environnement. Disposant d’une expertise avérée dans la
							conception et implémentation des campagnes médiatiques.
						</span>
						<h5
							className='text-success py-3'
							style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>
							UNE EQUIPE COMPETANTE
						</h5>
						<span>
							Nous disponsons d'une equipe competante passionné par
							l'environnement. Disposant d’une expertise avérée dans la
							conception et implémentation des campagnes médiatiques.
						</span>
						<h5
							className='text-success py-3'
							style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>
							UNE EQUIPE COMPETANTE
						</h5>
						<span>
							Nous disponsons d'une equipe competante passionné par
							l'environnement. Disposant d’une expertise avérée dans la
							conception et implémentation des campagnes médiatiques.
						</span>
					</div>
					<div className={`col-md-3 col-sm-12 ${serviceStyles.pub}`}></div>
				</div>
			</section>
			<section id='infographie'>
				<h5
					className={`border-start px-3 border-success border-5 ${serviceStyles.sub_title}`}>
					INFOGRAPHIE
				</h5>
			</section>
			<section id='documentaire'>
				<h5
					className={`border-start px-3 border-success border-5 ${serviceStyles.sub_title}`}>
					DOCUMENTAIRE
				</h5>
			</section>
			<section id='motion_design'>
				<h5
					className={`border-start px-3 border-success border-5 ${serviceStyles.sub_title}`}>
					MOTION DESIGN
				</h5>
			</section>
			<section id='spot_pub'>
				<h5
					className={`border-start px-3 border-success border-5 ${serviceStyles.sub_title}`}>
					SPOT PUBLICITAIRE
				</h5>
			</section>
		</div>
	);
};

export default Services;
