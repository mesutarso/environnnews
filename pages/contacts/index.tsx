import contactStyles from '../../styles/Contact.module.css';

const Contact = () => {
	return (
		<div className={contactStyles.content}>
			<div className='container'>
				<h5 className={`border-start px-3 border-success border-5`}>
					CONTACTS
				</h5>
			</div>
		</div>
	);
};

export default Contact;
