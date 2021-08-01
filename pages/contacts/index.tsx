/* eslint-disable react/no-unescaped-entities */
import { FaEnvelopeSquare, FaMobileAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { ImLocation2 } from 'react-icons/im';
import { AiOutlineMail } from 'react-icons/ai';
import contactStyles from '../../styles/Contact.module.css';
import AboutStyle from '../../styles/About.module.css';
import client from '../../graphql/uri';
import { GET_CONTACT } from '../../graphql/queries';
import { Partner } from '../../components/Partner';

const Contact = ({ contacts }) => {
	return (
		<>
			<div className={contactStyles.content}>
				<div className='container'>
					<h3 className={`text-center ${AboutStyle.title}`}>
						<span className='border-start border-success border-5 px-2'>
							CONTACTS
						</span>
					</h3>
					<div>
						<p className={`${AboutStyle.contactText}`}>
							Voulez vous nous contacter ? Quel a été votre experience sur notre
							site web ? Aimez vous ce que nous faisons ? Ecrivez sur n’importe
							quel sujet
						</p>
					</div>
					<div className='row'>
						<div className='col-md-6 col-sm-12 mt-3'>
							<div className='row d-flex align-items-center justify-content-center border py-3'>
								<div className='col-2 col-md-3 col-lg-2 col-sm-2'>
									<FaMobileAlt className={` mx-1 mt-3 ${contactStyles.icon}`} />
								</div>
								<div className='col-9  col-md-8 col-sm-10'>
									<span>Appelez-nous</span>
									<br />
									<a
										href='tel:+243 81 814 84 85'
										className={`${contactStyles.linkinfo}`}>
										+243 81 814 84 85
									</a>
								</div>
							</div>
							<div className='row d-flex align-items-center justify-content-center border py-3'>
								<div className='col-2 col-md-3 col-lg-2 col-sm-2'>
									<AiOutlineMail
										className={` mx-1 mt-3 ${contactStyles.icon}`}
									/>
								</div>
								<div className='col-9 col-md-8 col-sm-10'>
									<span>Ecrivez-nous</span>
									<br />
									<a
										href='mailto:infos@environews-rdc.org'
										className={`${contactStyles.linkinfo}`}>
										infos@environews-rdc.org
									</a>
								</div>
							</div>
							<div className='row d-flex align-items-center justify-content-center border py-3'>
								<div className='col-2 col-md-3 col-lg-2 col-sm-2'>
									<ImLocation2 className={` mx-1 mt-3 ${contactStyles.icon}`} />
								</div>
								<div className='col-9 col-md-8 col-sm-10'>
									<span>Retrouvez-nous</span>
									<br />
									<address>
										<span className={`${contactStyles.linkinfo}`}>
											N°265 Avenue du marché C/Gombre - Kinshasa
										</span>{' '}
										<br />
										Réferences: croisement des avenues kasai et du marché, non
										loin de l'université William Booth
									</address>
								</div>
							</div>
						</div>
						<div className='col-md-6 col-sm-12'>
							<h5 className={`${AboutStyle.title}`}>
								<span className='border-start border-success border-5 px-2'>
									LAISSER UN MESSAGE
								</span>
							</h5>
							<form className={`${AboutStyle.form}`}>
								<div>
									<input
										className='mb-4'
										type='text'
										placeholder='Noms'
										required
									/>
								</div>
								<div>
									<input
										className='mb-4'
										type='email'
										placeholder='Email Address'
										required
									/>
								</div>
								<div>
									<textarea
										className='mb-4 '
										placeholder='Message'
										required></textarea>
								</div>
								<div>
									<button className='btn btn-success'>Envoyer</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;

export const getServerSideProps = async () => {
	const contacts = await client.query({ query: GET_CONTACT });

	return {
		props: {
			contacts: contacts.data.contacts.edges,
		},
	};
};
