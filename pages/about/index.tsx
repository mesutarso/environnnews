import React from 'react';
import AboutStyle from '../../styles/About.module.css';
import TeamCard from '../../components/TeamCard';
import client from '../../graphql/uri';
import { GET_CONTACT } from '../../graphql/queries';

const Apropos = ({ contacts }) => {
	return (
		<>
			<div className={`container ${AboutStyle.mt_container}`}>
				<div className='row'>
					<div className='col-md-12'>
						<h1 className={`text-center ${AboutStyle.title}`}>
							<span className='border-start border-success border-5 px-2'>
								A PROPOS DE NOUS
							</span>
						</h1>
						<div
							className={`p-md-10 p-3 col-md-10 mx-auto ${AboutStyle.about_us}`}>
							<p className='text-justify'>
								Créée en 2013,
								<span className='text-success'>ENVIRONEWS RDC</span> est avant
								tout un organe de presse thématique. Disposant d’une expertise
								avérée dans la conception et implémentation des campagnes
								médiatiques.
							</p>
							<p className='text-justify'>
								Elle dispose en son sein d’une unité spécialisée dans la
								conception, création, et production des supports spécialisés,
								innovants et efficaces de communication d’une manière générale.
							</p>
							<p className='text-justify'>
								Elle a pour missions entre autres, la sensibilisation des masses
								(la population congolaise) à la prise de conscience sur les
								questions environnementales.
							</p>
							<p className='text-justify'>
								Communiquer pour le changement de comportement vis-à-vis de
								l’environnement, Informer sur les thématiques variées et
								complexes liées à l’Environnement avec en toile de fond la
								préservation de l’environnement.
							</p>

							<p className='text-justify'>
								Accompagner les décideurs dans la mise en place des politiques
								environnementales et l’implémentation des campagnes de
								sensibilisation axées sur le changement de paradigme et de
								comportement etc.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className={`container mb-5`}>
				<div className='row'>
					<div className='col-md-12 '>
						<h2 className={`text-center text-success ${AboutStyle.title}`}>
							NOTRE EQUIPE
						</h2>
					</div>
				</div>
				<div className={`mb-5 ${AboutStyle.card_row}`}>
					{contacts.map((contact, key) => (
						<div key={key} className={`${AboutStyle.col_3}`}>
							<TeamCard contact={contact} />
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Apropos;

export const getStaticProps = async () => {
	const contacts = await client.query({ query: GET_CONTACT });

	return {
		props: {
			contacts: contacts.data.contacts.edges,
		},
	};
};
