import footerStyles from '../styles/Footer.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../public/assets/environews_logo.png';
import {
	FaFacebookSquare,
	FaInstagramSquare,
	FaLinkedinIn,
	FaTwitter,
	FaYoutubeSquare,
} from 'react-icons/fa';

const Footer: React.FC = () => (
	<div className={footerStyles.footer}>
		<div className='container-fluid bg-dark py-5 fixed-bottom'>
			<div className='row justify-content-around'>
				<div className='col-12'>
					<div className='row justify-content-center'>
						<div className={`col-md-2 `}>
							<Image
								src={Logo}
								alt={`logo d'environ news`}
								className={`p-4 ${footerStyles.img_top}`}
							/>
						</div>
						<div className='col-md-2'>
							<h5 className='text-white border-start px-3 border-success border-5'>
								ENVIRONEWS
							</h5>
							<ul className={footerStyles.footerlinkstyle}>
								<Link href='/'>
									<a>
										<li>A propos</li>
									</a>
								</Link>
								<Link href='/'>
									<a>
										<li>Contact</li>
									</a>
								</Link>
								<Link href='/'>
									<a>
										<li>Publicité</li>
									</a>
								</Link>
								<Link href='/'>
									<a>
										<li>Newsletter</li>
									</a>
								</Link>
							</ul>
						</div>
						<div className='col-md-2'>
							<h5 className='text-white border-start px-3 border-success border-5'>
								SERVICE
							</h5>
							<ul className={footerStyles.footerlinkstyle}>
								<Link href='/'>
									<a>
										<li>Redaction</li>
									</a>
								</Link>
								<Link href='/'>
									<a>
										<li>Inforgraphie</li>
									</a>
								</Link>
								<Link href='/'>
									<a>
										<li>Documentation</li>
									</a>
								</Link>
								<Link href='/'>
									<a>
										<li>Motion Design</li>
									</a>
								</Link>
								<Link href='/'>
									<a></a>
								</Link>
								<Link href='/'>
									<a>
										<li>Spot publicitaire</li>
									</a>
								</Link>
							</ul>
						</div>
						<div className=' text-white col-md-2'>
							<h5 className='border-start px-3 border-success border-5'>
								ENVIRONEWST
							</h5>
							<div></div>
						</div>
						<div className='text-white col-md-2'>
							<h5 className='px-3'>Suivez-nous sur</h5>
							<div>
								<Link href='/'>
									<a>
										<FaFacebookSquare
											className='mx-1 mt-3'
											style={{ fontSize: '1.5rem' }}
										/>
									</a>
								</Link>
								<Link href='/'>
									<a>
										<FaTwitter
											className='mx-1 mt-3'
											style={{ fontSize: '1.5rem' }}
										/>
									</a>
								</Link>
								<Link href='/'>
									<a>
										<FaLinkedinIn
											className='mx-1 mt-3'
											style={{ fontSize: '1.5rem' }}
										/>
									</a>
								</Link>
								<Link href='/'>
									<a>
										{' '}
										<FaInstagramSquare
											className='mx-1 mt-3'
											style={{ fontSize: '1.5rem' }}
										/>
									</a>
								</Link>
								<Link href='/'>
									<a>
										<FaYoutubeSquare
											className='mx-1 mt-3'
											style={{ fontSize: '1.5rem' }}
										/>
									</a>
								</Link>
							</div>
						</div>
					</div>
					<hr
						className={`bg-white mt-5 ${footerStyles.footer_line}`}
						style={{ padding: '1px' }}
					/>
					<p className={`mt-3 ${footerStyles.footertextsilver}`}>
						copyright &copy; Environews-rdc 2021
					</p>
				</div>
			</div>
		</div>
	</div>
);

export default Footer;
