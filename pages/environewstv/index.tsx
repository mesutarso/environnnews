/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import AboutStyle from '../../styles/About.module.css';
import EnvironewsStyle from '../../styles/Environews.module.css';
import TvInfo from '../../components/TvInfo';

interface EmissionProps {
	emission: {
		id: number;
		title: string;
		description: string;
		phoneNumber: string;
	}[];
}

const EnvironewsTV = () => {
	const [emission, setEmission] = useState<EmissionProps['emission']>([
		{
			id: 1,
			title: 'INVITE DU WEEK-END',
			description: `C’est un programme de 45 minutes qui décrypte l’actualité
							environnementale, et propose des solutions idoines. Diffusé chaque
							samedi et dimanche, le programme reçoit des experts, et hommes
							politiques évoluant dans le domaine de l’environnement.`,
			phoneNumber: '+243818148485',
		},
		{
			id: 2,
			title: 'METIER VERT',
			description: `Métiers verts est une émissions produit par Environews TV qui a pour objectif principal Assurer la promotion de l'entrepreunariat vert Congolais.
             Quelques métiers verts : Assainissement et traitement des dechets,
			 production et distribution de l'énergie et de l'eau, Protection de la nature...`,
			phoneNumber: '+243818148485',
		},
		{
			id: 3,
			title: 'ISO AUTOCHTONES',
			description: `C’est un programme d’une heure, consacré à la promotion de
			    la culture des peuples autochtones pygmées de la république démocratique du Congo.
               Elvie Maliya, recoit les pygmées vivant à Kinshasa pour des entretiens ciblés,
			   et réflexions sur le mode de vie de ce peuple longtemps marginalisé..`,
			phoneNumber: '+243818148485',
		},
	]);
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
					<div className='col-md-3 col-12 my-3 my-md-0 text-center'>
						<img
							src='/assets/environews_logo.png'
							className='img-fluid text-center'
							alt='logo environews'
						/>
					</div>
					<div
						className={`p-md-5 col-11 mt-2 col-md-8 mx-auto ${AboutStyle.about_us}`}>
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
			<div className='container  mt-5 mt-md-3'>
				<div className='row'>
					<div className='col-md-12'>
						<h2 className={`text-center text-success ${AboutStyle.title}`}>
							NOS EMISSIONS
						</h2>
					</div>
				</div>
			</div>

			{emission.map(({ id, title, description, phoneNumber }) => (
				<TvInfo
					key={id}
					title={title}
					description={description}
					phoneNumber={phoneNumber}
				/>
			))}
		</>
	);
};

export default EnvironewsTV;
