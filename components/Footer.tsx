/* eslint-disable @next/next/no-img-element */
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

const Footer = () => (
	<div className={`${footerStyles.footer}`}>
		<div className='container-fluid bg-dark pt-5 '>
			<div className='row justify-content-center py-4'>
				<div className='col-12'>
					<div className='row justify-content-center'>
						<div className='col-12 col-md-2 justify-content-center'>
							<img
								data-testid='logo-environews'
								src='/assets/environews_logo.png'
								alt="logo d'environ news"
								className={`img-fluid  mx-auto d-block ${footerStyles.img_top}`}
							/>
						</div>
						<div className='col-md-2 col-5 mt-md-0 mt-4 '>
							<h6
								data-testid='title-environews'
								className='text-white border-start px-2 border-success border-5'>
								ENVIRONEWS
							</h6>
							<ul className={footerStyles.footerlinkstyle}>
								<Link href='/about'>
									<a>
										<li>A propos</li>
									</a>
								</Link>
								<Link href='/contacts'>
									<a>
										<li>Contacts</li>
									</a>
								</Link>
							</ul>
						</div>
						<div className='col-md-2 col-5 mt-md-0 mt-4 '>
							<h6
								data-testid='title-environews'
								className='text-white border-start px-2 border-success border-5'>
								SERVICE
							</h6>
							<ul className={footerStyles.footerlinkstyle}>
								<Link href='/services#redaction' passHref>
									<a>
										<li>Redaction</li>
									</a>
								</Link>
								<Link href='/services#infographie'>
									<a>
										<li>Inforgraphie</li>
									</a>
								</Link>
								<Link href='/services#documentaire'>
									<a>
										<li>Documentation</li>
									</a>
								</Link>
								<Link href='/services#motion_design'>
									<a>
										<li>Motion Design</li>
									</a>
								</Link>
								<Link href='/services#spot_pub'>
									<a>
										<li>Spot publicitaire</li>
									</a>
								</Link>
							</ul>
						</div>
						<div className=' text-white col-md-2 col-10 mt-md-0 mt-4 '>
							<h6
								data-testid='title-environews'
								className='border-start px-2 border-success border-5'>
								<Link href='/environewstv'>
									<a>ENVIRONEWS TV</a>
								</Link>
							</h6>
						</div>
						<div
							className={`text-white col-md-2 col-12 text-center mt-md-0 mt-4 ${footerStyles.icons}`}>
							<span className='px-1'>Suivez-nous sur</span>
							<div>
								<Link href='https://web.facebook.com/EnvironewsRDC/?_rdc=1&_rdr'>
									<a data-testid='link-facebook'>
										<FaFacebookSquare
											className='mx-1 mt-3'
											style={{ fontSize: '1.5rem' }}
										/>
									</a>
								</Link>
								<Link href='https://twitter.com/environews_rdc?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'>
									<a data-testid='link-twiter'>
										<FaTwitter
											className='mx-1 mt-3'
											style={{ fontSize: '1.5rem' }}
										/>
									</a>
								</Link>
								<Link href='https://www.linkedin.com/company/environews-rdc/'>
									<a data-testid='link-linkedinIn'>
										<FaLinkedinIn
											className='mx-1 mt-3'
											style={{ fontSize: '1.5rem' }}
										/>
									</a>
								</Link>
								<Link href='https://www.instagram.com/environewsrdc1/'>
									<a data-testid='link-Instagram'>
										<FaInstagramSquare
											className='mx-1 mt-3'
											style={{ fontSize: '1.5rem' }}
										/>
									</a>
								</Link>
								<Link href='https://www.youtube.com/c/environnementrdc/featured'>
									<a data-testid='link-youtube'>
										<FaYoutubeSquare
											className='mx-1 mt-3'
											style={{ fontSize: '1.5rem' }}
										/>
									</a>
								</Link>
							</div>
						</div>
					</div>
					<hr className={` mt-4 bg-white ${footerStyles.footer_line}`} />
					<p
						data-testid='copyrigth'
						className={` mt-3 text-white text-center ${footerStyles.copyright} `}>
						Copyright &copy; Environews-rdc 2021
					</p>
				</div>
			</div>
		</div>
	</div>
);

export default Footer;
