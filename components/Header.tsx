import React, { useState } from 'react';
import Image from 'next/image';
import { BsSearch, BsList, BsX, BsHouseFill } from 'react-icons/bs';
import { WiSleet } from 'react-icons/wi';
import Link from 'next/link';

import headerStyles from '../styles/Header.module.css';
import Logo from '../public/assets/environews_logo.png';

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
	return (
		<div className={headerStyles.nav}>
			<Link href='/' passHref>
				<a className={`${headerStyles.link}`}>
					<BsHouseFill fontSize={25} />
				</a>
			</Link>

			<Link href='/' passHref>
				<a className={`${headerStyles.link} border-start px-2 border-1`}>
					CONSERVATION
				</a>
			</Link>
			<Link href='/' passHref>
				<a className={`${headerStyles.link} border-start px-2 border-1`}>
					SANTE
				</a>
			</Link>
			<Link href='/' passHref>
				<a className={`${headerStyles.link} border-start px-2 border-1`}>
					FORET
				</a>
			</Link>
			<Link href='/' passHref>
				<a className={`${headerStyles.link} border-start px-2 border-1`}>
					ENVIRONNEMENT
				</a>
			</Link>
			<Link href='/' passHref>
				<a className={`${headerStyles.link} border-start px-2 border-1`}>
					CLIMAT
				</a>
			</Link>
			<Link href='/' passHref>
				<a className={`${headerStyles.link} border-start px-2 border-1`}>
					BIODIVESERSITE
				</a>
			</Link>
			<Link href='/' passHref>
				<a className={`${headerStyles.link} border-start px-2 border-1`}>
					ENERGIE
				</a>
			</Link>
			<Link href='/' passHref>
				<a className={`${headerStyles.link} border-start px-2 border-1`}>
					POLLUTION
				</a>
			</Link>
			<Link href='/' passHref>
				<a className={`${headerStyles.link} border-start px-2 border-1`}>
					AUTRES
				</a>
			</Link>
			<Link href='/' passHref>
				<a className={`${headerStyles.link} border-start px-2 border-1`}>
					DOSSIER
				</a>
			</Link>
			<Link href='/' passHref>
				<a className={`${headerStyles.link} border-start px-2 border-1`}>
					OPPORTUNITE
				</a>
			</Link>
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
