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

const Footer: React.FC = () => (
	<div className={`${footerStyles.footer}`}>
		<div className='container-fluid bg-dark pt-5 '>
			<div className='row justify-content-center py-4'>
				<div className='col-12'>
					<div className='row justify-content-center'>
						<div className='col-md-2 '>
							<img
								src='/assets/environews_logo.png'
								alt="logo d'environ news"
								className={`img-fluid  ${footerStyles.img_top}`}
							/>
						</div>
						<div className='col-md-2'>
							<h6 className='text-white border-start px-2 border-success border-5'>
								ENVIRONEWS
							</h6>
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
							<h6 className='text-white border-start px-2 border-success border-5'>
								SERVICE
							</h6>
							<ul className={footerStyles.footerlinkstyle}>
								<Link href='/services' passHref>
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
							<h6 className='border-start px-2 border-success border-5'>
								ENVIRONEWSTV
							</h6>
							<div></div>
						</div>
						<div className={`text-white col-md-2 ${footerStyles.icons}`}>
							<span className='px-1'>Suivez-nous sur</span>
							<div>
								<Link href='https://web.facebook.com/EnvironewsRDC/?_rdc=1&_rdr'>
									<a>
										<FaFacebookSquare
											className='mx-1 mt-3'
											style={{ fontSize: '1.5rem' }}
										/>
									</a>
								</Link>
								<Link href='https://twitter.com/environews_rdc?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'>
									<a>
										<FaTwitter
											className='mx-1 mt-3'
											style={{ fontSize: '1.5rem' }}
										/>
									</a>
								</Link>
								<br />
								<Link href='https://www.linkedin.com/company/environews-rdc/'>
									<a>
										<FaLinkedinIn
											className='mx-1 mt-3'
											style={{ fontSize: '1.5rem' }}
										/>
									</a>
								</Link>
								<Link href='https://www.instagram.com/environewsrdc1/'>
									<a>
										<FaInstagramSquare
											className='mx-1 mt-3'
											style={{ fontSize: '1.5rem' }}
										/>
									</a>
								</Link>
								<Link href='https://www.youtube.com/c/environnementrdc/featured'>
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
					<hr className={` mt-4 bg-white ${footerStyles.footer_line}`} />
					<p
						className={` mt-3 text-white text-center ${footerStyles.copyright} `}>
						copyright &copy; Environews-rdc 2021
					</p>
				</div>
			</div>
		</div>
	</div>
);

export default Footer;
