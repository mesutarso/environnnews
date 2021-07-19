/* eslint-disable react/no-unescaped-entities */
import { FaEnvelopeSquare, FaMobileAlt, FaMapMarkerAlt } from 'react-icons/fa';
import contactStyles from '../../styles/Contact.module.css';
import AboutStyle from '../../styles/About.module.css';
import client from '../../graphql/uri';
import { GET_CONTACT } from '../../graphql/queries';

const Contact = ({ contacts }) => {
	console.log('contacts ', contacts);
	return (
		<div className={contactStyles.content}>
			<div className='container'>
				<h3 className={`text-center ${AboutStyle.title}`}>
					<span className='border-start border-success border-5 px-2'>
						CONTACTS
					</span>
				</h3>
				<div>
					<p style={{ textAlign: 'center', padding: '10px' }}>
						Voulez vous nous contacter ? Quel a été votre experience sur notre
						site web ? Aimez vous ce que nous faisons ? Ecrivez sur n’importe
						quel sujet
					</p>
				</div>
				<div className='row'>
					<div className='col-md-6 col-sm-12'>
						<div className='row d-flex align-items-center justify-content-center'>
							<div className='col-4 col-md-3 col-sm-2'>
								<FaMobileAlt className={` mx-1 mt-3 ${contactStyles.icon}`} />
							</div>
							<div className='col-8  col-md-7 col-sm-9'>
								<span>Appelez-nous</span>
								<br />
								<a
									href='tel:+243 81 814 84 85'
									className={`${contactStyles.linkinfo}`}>
									+243 81 814 84 85
								</a>
							</div>
						</div>
						<div className='row d-flex align-items-center justify-content-center'>
							<div className='col-4 col-md-3 col-sm-2'>
								<FaEnvelopeSquare
									className={` mx-1 mt-3 ${contactStyles.icon}`}
								/>
							</div>
							<div className='col-8 col-md-7 col-sm-9'>
								<span>Ecrivez-nous</span>
								<br />
								<a
									href='mailto:infos@environews-rdc.org'
									className={`${contactStyles.linkinfo}`}>
									infos@environews-rdc.org
								</a>
							</div>
						</div>
						<div className='row d-flex align-items-center justify-content-center'>
							<div className='col-4 col-md-3 col-sm-2'>
								<FaMapMarkerAlt
									className={` mx-1 mt-3 ${contactStyles.icon}`}
								/>
							</div>
							<div className='col-8 col-md-7 col-sm-9'>
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
						<form style={{ padding: '20px' }}>
							<div style={{ margin: '7px' }}>
								<input
									className='form-control'
									type='text'
									placeholder='Noms'
									required
								/>
							</div>
							<div style={{ margin: '7px' }}>
								<input
									className='form-control'
									type='email'
									placeholder='Email Address'
									required
								/>
							</div>
							<div style={{ margin: '7px' }}>
								<textarea
									style={{ resize: 'none' }}
									className='form-control'
									placeholder='Message'
									required></textarea>
							</div>
							<div style={{ marginLeft: '5px', marginTop: '15px' }}>
								<button className='btn btn-success'>Envoyer</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
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
