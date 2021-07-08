/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import AboutStyle from '../../styles/About.module.css';
import EnvironewsStyle from '../../styles/Environews.module.css';

const EnvironewsTV = () => {
	return (
		<>
			<div className={`container ${AboutStyle.mt_container}`}>
				<div className='row'>
					<div className='col-md-12'>
						<h1 className={`text-center ${AboutStyle.title}`}>
							<span className='border-start border-success border-5 px-2'>
								ENVIRON NEWS TV
							</span>
						</h1>
					</div>
					<div className='col-md-3'>
						<img
							src='/assets/environews_logo.png'
							className='img-fluid'
							alt='logo environews'
						/>
					</div>
					<div className={`p-5 col-8 mx-auto ${AboutStyle.about_us}`}>
						<p className={`text-justify ${EnvironewsStyle.font_bold}`}>
							<strong>
								Environews TV est une chaine de télévision thématique axée sur l
								' environnement et la Santé. Elle a été créée en Mars 2019.
							</strong>
						</p>
						<p className='text-justify'>
							Environews TV se présente comme un canal par excellence qui met en
							lumière les forêts congolaises, éduque les populations et les
							informe sur le potentiel écologique du pays.
						</p>
						<p className='text-justify'>
							Elle est l’unique en RDC et en Afrique francophone qui accorde
							plus de 90% de ses programmes à l’environnement. Elle aborde les
							différentes thématiques notamment le changement climatique,
							l’aménagement du territoire, l’eau, l’énergie, les forêts, etc.
						</p>
						<p className='text-justify'>
							Nous disponsons d &apos;une equipe competante passionné par l '
							environnement. Disposant d’une expertise avérée dans la conception
							et implémentation des campagnes médiatiques.
						</p>
						<hr className='mt-3' />
						<div className='col-12'>
							<div className='row justify-content-center'>
								<div className='col-2'>
									<img
										src='/assets/tnt.png'
										className='img-fluid'
										alt='logo environews'
									/>
								</div>
								<div className='col-2'>
									<img
										src='/assets/bluesat.png'
										className='img-fluid'
										alt='logo environews'
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='container'>
				<div className='row'>
					<div className='col-md-10 border border-danger'>
						<h5 className='border-success border-start px-2 border-5'>
							INVITE DU WEEK-END
						</h5>
						<div className='col-md-8 border-success border-1 border-start px-2'>
							<p>
								C’est un programme de 45 minutes qui décrypte l’actualité
								environnementale, et propose des solutions idoines. Diffusé
								chaque samedi et dimanche, le programme reçoit des experts, et
								hommes politiques évoluant dans le domaine de l’environnement.
							</p>
							<p>Tél : +243818148485</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default EnvironewsTV;
