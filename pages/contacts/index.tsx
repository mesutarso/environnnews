import contactStyles from '../../styles/Contact.module.css';
import AboutStyle from '../../styles/About.module.css';

const Contact = () => {
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
			</div>
		</div>
	);
};

export default Contact;
