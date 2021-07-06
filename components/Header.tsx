import React, { useState } from 'react';
import Image from 'next/image';
import { BsSearch, BsList, BsX, BsHouseFill } from 'react-icons/bs';
import { WiSleet } from 'react-icons/wi';
import Link from 'next/link';

import headerStyles from '../styles/Header.module.css';
import Logo from '../public/assets/environews_logo.png';

interface NavProps {
	nav: {
		id: number;
		categorie_name: string;
	}[];
}

const Appbar: React.FC = () => {
	const [showMenu, setShowMenu] = useState<boolean>(false);
	return (
		<div className={headerStyles.header}>
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
					onClick={() => setShowMenu(!showMenu)}
					className={headerStyles.menu}>
					{showMenu ? (
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
	const [categories, setCategories] = useState<NavProps['nav']>([
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
	]);
	return (
		<div className={headerStyles.nav}>
			<Link href='/' passHref>
				<a className={`${headerStyles.link}`}>
					<BsHouseFill fontSize={30} />
				</a>
			</Link>
			{categories.map((categorie) => (
				<Link
					key={categorie.id}
					href='/categories/[name]'
					as={`/categories/${categorie.categorie_name}`}
					passHref>
					<a className={`${headerStyles.link} border-start px-2 border-1`}>
						{categorie.categorie_name}
					</a>
				</Link>
			))}
		</div>
	);
};

const Header: React.FC = () => {
	return (
		<div className={headerStyles.container}>
			<Appbar />
			<NavBar />
		</div>
	);
};

export default Header;
