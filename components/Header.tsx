import React, { useState, createContext, useContext } from 'react';
import Image from 'next/image';
import { BsSearch, BsList, BsX, BsHouseFill } from 'react-icons/bs';
import Link from 'next/link';
import headerStyles from '../styles/Header.module.css';
import Logo from '../public/assets/environews_logo.png';
import { GetStaticProps } from 'next';

import {
	FaFacebookSquare,
	FaInstagramSquare,
	FaLinkedinIn,
	FaTwitter,
	FaYoutubeSquare,
} from 'react-icons/fa';
import { spawn } from 'node:child_process';

interface IdProps {
	id?: number;
	ip?: number;
}

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

//togle search context
type toggleSearchState = {
	toggleSearch: boolean;
	setToggleSearch: (dispatch: any) => void;
};

const toggleSearchDefaultValue: toggleSearchState = {
	toggleSearch: false,
	setToggleSearch: () => {},
};

const toggleSearchContext = createContext<toggleSearchState>(
	toggleSearchDefaultValue
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

const Appbar = ({ data }) => {
	const { toggleMenu, setToggleMenu } = useContext(toggleMenuContext);
	const { toggleSearch, setToggleSearch } = useContext(toggleSearchContext);
	return (
		<div className={`container ${headerStyles.header}`}>
			<Link href='/' passHref>
				<a>
					<Image src={Logo} alt='Environews Logo' width={142} height={81} />
				</a>
			</Link>
			<div className={headerStyles.weather}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='40'
					height='40'
					fill='currentColor'
					className={`bi bi-cloud-drizzle-fill ${headerStyles.icons} ${headerStyles.colored_icon}`}
					viewBox='0 0 20 20'>
					<path d='M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm-3.5 1.5a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm.747-8.498a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973z' />
				</svg>
				<div className={headerStyles.weather_date}>
					<span> Tuesday, 24th July 2021</span>
					<span> {data} C</span>
				</div>
				<BsSearch
					onClick={() => {
						setToggleSearch(!toggleSearch);
						setToggleMenu(false);
					}}
					fontSize={25}
					className={`${headerStyles.icons}`}
				/>
				<button
					onClick={() => {
						setToggleMenu(!toggleMenu);
						setToggleSearch(false);
					}}
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
		<div className={headerStyles.nav_container}>
			<div className={`container ${headerStyles.nav}`}>
				<Link href='/' as='/' passHref>
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
		</div>
	);
};

const HiddenMenu: React.FC = () => {
	const { toggleMenu, setToggleMenu } = useContext(toggleMenuContext);
	const [categories, setCategories] = useState(categoriesList);
	return (
		<div
			className={`${headerStyles.submenu} ${
				toggleMenu ? headerStyles.toggle_submenu : ''
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
										className={`${headerStyles.submenu_link} ${headerStyles.submenu_link} ${headerStyles.hidden_link}`}>
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
						<Link href='/environewstv'>
							<a
								onClick={() => setToggleMenu(false)}
								className={`${headerStyles.submenu_link} ${headerStyles.submenu_link}`}>
								<li>La TV</li>
							</a>
						</Link>
						<Link href='/environewstv'>
							<a
								onClick={() => setToggleMenu(false)}
								className={`${headerStyles.submenu_link} ${headerStyles.submenu_link}`}>
								<li>Programme de diffusion</li>
							</a>
						</Link>
						<Link href='/environewstv#emission'>
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

const SearchBar: React.FC = () => {
	const { toggleSearch, setToggleSearch } = useContext(toggleSearchContext);
	return (
		<div
			className={`${headerStyles.search_bar_container} ${
				!toggleSearch ? headerStyles.hidden : ''
			}`}>
			<input
				type='search'
				placeholder='Rechercher un article'
				className={`${headerStyles.search_bar}`}
			/>
			<button className={`${headerStyles.search_button}`}>
				<BsSearch fontSize={25} className={headerStyles.icons} />
			</button>
		</div>
	);
};

const Header = ({ data }) => {
	const [toggleMenu, setToggleMenu] = useState<boolean>(
		toggleMenuDefaultValue.toggleMenu
	);
	const [toggleSearch, setToggleSearch] = useState<boolean>(
		toggleSearchDefaultValue.toggleSearch
	);

	return (
		<toggleMenuContext.Provider value={{ toggleMenu, setToggleMenu }}>
			<toggleSearchContext.Provider value={{ toggleSearch, setToggleSearch }}>
				<div className={headerStyles.container}>
					<Appbar data={data} />
					<HiddenMenu />
					<SearchBar />
					<NavBar />
				</div>
			</toggleSearchContext.Provider>
		</toggleMenuContext.Provider>
	);
};

export default Header;
export const getStaticProps: GetStaticProps = () => {
	//const fetchId = await fetch(
	//'https://jsonplaceholder.typicode.com/users?_limit=4'
	//);
	//const data = fetchId.json();
	//console.log(data);
	const data = 100;
	return {
		props: {
			data,
		},
	};
};
