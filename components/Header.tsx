import React, { useState, createContext, useContext } from 'react';
import Image from 'next/image';
import { BsSearch, BsList, BsX, BsHouseFill } from 'react-icons/bs';
import { WiSleet } from 'react-icons/wi';
import Link from 'next/link';
import headerStyles from '../styles/Header.module.css';
import Logo from '../public/assets/environews_logo.png';

import {
	FaFacebookSquare,
	FaInstagramSquare,
	FaLinkedinIn,
	FaTwitter,
	FaYoutubeSquare,
} from 'react-icons/fa';

//toogle menu context
type toggleMenuState = {
	toggleMenu: boolean;
	setToggleMenu: (dispatch: any) => void;
};

const toggleMenuDefaultValue: toggleMenuState = {
	toggleMenu: false,
	setToggleMenu: () => {},
};

const toggleMenuContext = createContext<toggleMenuState>(
	toggleMenuDefaultValue
);

interface NavProps {
	nav: {
		id: number;
		categorie_name: string;
	}[];
}

//categorie table
const categoriesList = [
	{
		id: 1,
		categorie_name: 'conservation',
	},
	{
		id: 2,
		categorie_name: 'sante',
	},
	{
		id: 3,
		categorie_name: 'foret',
	},
	{
		id: 4,
		categorie_name: 'environement',
	},
	{
		id: 5,
		categorie_name: 'climat',
	},
	{
		id: 6,
		categorie_name: 'biodiversite',
	},
	{
		id: 7,
		categorie_name: 'energie',
	},
	{
		id: 8,
		categorie_name: 'pollution',
	},
	{
		id: 9,
		categorie_name: 'autres',
	},
	{
		id: 10,
		categorie_name: 'dossier',
	},
	{
		id: 11,
		categorie_name: 'opportunite',
	},
];

const Appbar: React.FC = () => {
	const { toggleMenu, setToggleMenu } = useContext(toggleMenuContext);
	return (
		<div className={`${headerStyles.header}`}>
			<Image src={Logo} alt='Environews Logo' width={142} height={81} />
			<div className={headerStyles.weather}>
				<WiSleet
					fontSize={30}
					className={`${headerStyles.icons} ${headerStyles.colored_icon}`}
				/>
				<div className={headerStyles.weather_date}>
					<span> Tuesday, 24th July 2021</span>
					<span> 22 C</span>
				</div>
				<BsSearch fontSize={25} className={headerStyles.icons} />
				<button
					onClick={() => setToggleMenu(!toggleMenu)}
					className={`${headerStyles.menu}`}>
					{toggleMenu ? (
						<BsX fontSize={30} className={headerStyles.icons} />
					) : (
						<BsList fontSize={30} className={headerStyles.icons} />
					)}
				</button>
			</div>
		</div>
	);
};

const NavBar: React.FC = () => {
	const [categories, setCategories] = useState(categoriesList);
	return (
		<div className={headerStyles.nav}>
			<Link href='/' passHref>
				<a className={`${headerStyles.link} ${headerStyles.linkIcon}`}>
					<BsHouseFill fontSize={19} />
				</a>
			</Link>
			{categories.map((categorie) => (
				<Link
					key={categorie.id}
					href='/categories/[name]'
					as={`/categories/${categorie.categorie_name}`}
					passHref>
					<a className={`${headerStyles.link}`}>{categorie.categorie_name}</a>
				</Link>
			))}
		</div>
	);
};

const HiddenMenu: React.FC = () => {
	const { toggleMenu, setToggleMenu } = useContext(toggleMenuContext);
	const [categories, setCategories] = useState(categoriesList);
	return (
		<div
			className={`${headerStyles.submenu} ${
				toggleMenu ? headerStyles.toggle_submenu : headerStyles.submenu
			}`}>
			<div className='row justify-content-md-center pt-5'>
				<div className='col-2 '>
					<h6 className='border-start px-2 border-success border-5'>
						ACTUALITES
					</h6>
					<ul className={`${headerStyles.submenu_link_list}`}>
						{categories.map((categorie) => (
							<li key={categorie.id}>
								<Link
									href='/categories/[name]'
									as={`/categories/${categorie.categorie_name}`}
									passHref>
									<a
										onClick={() => setToggleMenu(false)}
										className={`${headerStyles.submenu_link} ${headerStyles.submenu_link}`}>
										{categorie.categorie_name}
									</a>
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div className='col-2'>
					<h6 className='border-start px-2 border-success border-5'>
						SERVICES
					</h6>
					<ul className={`${headerStyles.submenu_link_list}`}>
						<Link href='/services#redaction'>
							<a
								onClick={() => setToggleMenu(false)}
								className={`${headerStyles.submenu_link} ${headerStyles.submenu_link}`}>
								<li>Rédaction</li>
							</a>
						</Link>
						<Link href='/services#infographie'>
							<a
								onClick={() => setToggleMenu(false)}
								className={`${headerStyles.submenu_link} ${headerStyles.submenu_link}`}>
								<li>Infographie</li>
							</a>
						</Link>
						<Link href='/services#documentaire'>
							<a
								onClick={() => setToggleMenu(false)}
								className={`${headerStyles.submenu_link} ${headerStyles.submenu_link}`}>
								<li>Documentaire</li>
							</a>
						</Link>
						<Link href='/services#motion_design'>
							<a
								onClick={() => setToggleMenu(false)}
								className={`${headerStyles.submenu_link} ${headerStyles.submenu_link}`}>
								<li>Motion Design</li>
							</a>
						</Link>
						<Link href='/services#spot_pub'>
							<a
								onClick={() => setToggleMenu(false)}
								className={`${headerStyles.submenu_link} ${headerStyles.submenu_link}`}>
								<li>Spot publicitaire</li>
							</a>
						</Link>
					</ul>
				</div>
				<div className='col-2'>
					<h6 className='border-start px-2 border-success border-5'>
						ENVIRONEWS TV
					</h6>
					<ul className={`${headerStyles.submenu_link_list}`}>
						<Link href='/'>
							<a
								onClick={() => setToggleMenu(false)}
								className={`${headerStyles.submenu_link} ${headerStyles.submenu_link}`}>
								<li>La TV</li>
							</a>
						</Link>
						<Link href='/'>
							<a
								onClick={() => setToggleMenu(false)}
								className={`${headerStyles.submenu_link} ${headerStyles.submenu_link}`}>
								<li>Programme de diffusion</li>
							</a>
						</Link>
						<Link href='/'>
							<a
								onClick={() => setToggleMenu(false)}
								className={`${headerStyles.submenu_link} ${headerStyles.submenu_link}`}>
								<li>Emissions</li>
							</a>
						</Link>
					</ul>
				</div>
				<div
					className={`text-dark col-2 ${headerStyles.icons} ${headerStyles.left_border}`}>
					<span className='px-1'>Suivez-nous sur</span>
					<div>
						<Link href='https://web.facebook.com/EnvironewsRDC/?_rdc=1&_rdr'>
							<a onClick={() => setToggleMenu(false)} target='_blank'>
								<FaFacebookSquare
									className='mx-1 mt-3'
									style={{ fontSize: '1.5rem' }}
								/>
							</a>
						</Link>
						<Link href='https://twitter.com/environews_rdc?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'>
							<a onClick={() => setToggleMenu(false)} target='_blank'>
								<FaTwitter
									className='mx-1 mt-3'
									style={{ fontSize: '1.5rem' }}
								/>
							</a>
						</Link>
						<Link href='https://www.linkedin.com/company/environews-rdc/'>
							<a onClick={() => setToggleMenu(false)} target='_blank'>
								<FaLinkedinIn
									className='mx-1 mt-3'
									style={{ fontSize: '1.5rem' }}
								/>
							</a>
						</Link>
						<Link href='https://www.instagram.com/environewsrdc1/'>
							<a onClick={() => setToggleMenu(false)} target='_blank'>
								<FaInstagramSquare
									className='mx-1 mt-3'
									style={{ fontSize: '1.5rem' }}
								/>
							</a>
						</Link>
						<Link href='https://www.youtube.com/c/environnementrdc/featured'>
							<a onClick={() => setToggleMenu(false)} target='_blank'>
								<FaYoutubeSquare
									className='mx-1 mt-3'
									style={{ fontSize: '1.5rem' }}
								/>
							</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

const Header: React.FC = () => {
	const [toggleMenu, setToggleMenu] = useState<boolean>(
		toggleMenuDefaultValue.toggleMenu
	);

	return (
		<toggleMenuContext.Provider value={{ toggleMenu, setToggleMenu }}>
			<div className={headerStyles.container}>
				<Appbar />
				<HiddenMenu />
				<NavBar />
			</div>
		</toggleMenuContext.Provider>
	);
};

export default Header;
