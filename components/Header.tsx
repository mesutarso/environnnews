import React, { useState, useContext, useEffect } from 'react';
import Image from 'next/image';
import { BsSearch, BsList, BsX, BsHouseFill } from 'react-icons/bs';
import Link from 'next/link';
import headerStyles from '../styles/Header.module.css';
import Logo from '../public/assets/environews_logo.png';
import axios from 'axios';
import client from '../graphql/uri';
import { GET_CATEGORIES } from '../graphql/queries';
import {
	FaFacebookSquare,
	FaInstagramSquare,
	FaLinkedinIn,
	FaTwitter,
	FaYoutubeSquare,
} from 'react-icons/fa';
import {
	toggleMenuContext,
	toggleSearchContext,
	toggleMenuDefaultValue,
	toggleSearchDefaultValue,
} from '../components/contexts/toggleContext';

import {
	ISituation,
	IMetric,
	ITemperature,
} from '../components/interface/HeaderInterface';
import { useRouter } from 'next/router';

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
		categorie_name: 'environnement',
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

const Appbar = () => {
	const [userIp, setUserIp] = useState('');
	const [userLocation, setUserLocation] = useState('109888');

	const [currentSituation, SetCurrrentSituation] = useState<
		ISituation['current']
	>({
		EpochTime: 1,
		WeatherIcon: 1,
		Temperature: {
			Metric: {
				Value: 25,
			},
		},
	});

	const { toggleMenu, setToggleMenu } = useContext(toggleMenuContext);
	const { toggleSearch, setToggleSearch } = useContext(toggleSearchContext);

	useEffect(() => {
		const getIpAdress = async () => {
			try {
				const ipData_apiKey =
					'ed25b075de2fd63a7d9ede85bdf87efb368297aaa547c858218d8620';

				const ipDataUrl = `https://api.ipdata.co?api-key=${ipData_apiKey}`;

				const res = await axios.get(ipDataUrl);
				const data = await res.data.ip;
				setUserIp(data);
			} catch (error) {
				// console.log(error.response);
				// throw error;
			}
		};
		const accuWeather_apiKey = 'z2pgUOjAb7Y6JCObqZpPhA8T3T2hfOmz';

		const getlocationKey = async () => {
			try {
				const res = await axios.get(
					`https://dataservice.accuweather.com/locations/v1/cities/ipaddress?apikey=${accuWeather_apiKey}&q=${userIp}&language=fr`
				);
				const data = await res.data.Key;
				setUserLocation(data);
			} catch (error) {
				// console.log(error.response);
				// throw error;
			}
		};
		const getCurrentSituation = async () => {
			try {
				const res = await axios.get(
					`https://dataservice.accuweather.com/currentconditions/v1/${userLocation}?apikey=${accuWeather_apiKey}&language=fr`
				);
				const data = await res.data[0];
				SetCurrrentSituation(data);
			} catch (error) {
				// console.log(error.response);
			}
		};

		getIpAdress();
		getlocationKey();
		getCurrentSituation();
	}, [userIp, userLocation]);

	const stringDay =
		currentSituation.EpochTime &&
		new Date(currentSituation.EpochTime * 1000).toLocaleDateString(undefined, {
			weekday: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		});

	const stringDayCapitalize =
		stringDay && stringDay.charAt(0).toUpperCase() + stringDay.slice(1);

	return (
		<div className={`container ${headerStyles.header}`}>
			<Link href='/' passHref>
				<a>
					<Image src={Logo} alt='Environews Logo' width={142} height={81} />
				</a>
			</Link>
			<div className={headerStyles.weather}>
				<Image
					src={`/weather_icons/${
						currentSituation.WeatherIcon &&
						Math.floor(currentSituation.WeatherIcon)
					}.svg`}
					width={60}
					height={60}
					alt='weather icon'
				/>
				<div className={` ${headerStyles.weather_date}`}>
					<span>{stringDayCapitalize}</span>
					<span>
						{currentSituation.Temperature &&
							Math.floor(currentSituation.Temperature.Metric.Value)}{' '}
						°C
					</span>
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
	const [categories, setCategories] = useState([]);
	const [cats, setCats] = useState([]);

	useEffect(() => {
		(async function () {
			const categoriesFetch = await client.query({ query: GET_CATEGORIES });
			const categories = await categoriesFetch.data.menuItems.edges;

			setCategories(categories);
		})();
	}, []);

	console.log('cats ', cats);
	const router = useRouter();

	return (
		<div className={headerStyles.nav_container}>
			<div className={`container ${headerStyles.nav}`}>
				<Link href='/' as='/' passHref>
					<a
						className={`${headerStyles.link}  ${
							router.asPath === `/` && headerStyles.active_link
						}`}>
						<BsHouseFill fontSize={19} />
					</a>
				</Link>
				{categories.map((categorie, key) => (
					<Link
						key={key}
						href='/categories/[name]'
						as={`/categories/${categorie.node.label}`}
						passHref>
						<a
							className={`${headerStyles.link} ${
								router.asPath === `/categories/${categorie.node.label}` &&
								headerStyles.active_link
							}`}>
							{categorie.node.label}
						</a>
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
			<div className='row justify-content-center px-4 py-5'>
				<div className='col-6 col-md-2 '>
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
				<div className='col-6 col-md-2 '>
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
				<div className='col-6 col-md-2 '>
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
				<div className={`text-dark col-6 col-md-2 ${headerStyles.left_border}`}>
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

const Header = () => {
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
					<Appbar />
					<HiddenMenu />
					<SearchBar />
					<NavBar />
				</div>
			</toggleSearchContext.Provider>
		</toggleMenuContext.Provider>
	);
};

export default Header;
