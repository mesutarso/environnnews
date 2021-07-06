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
			<Image src={Logo} alt='Environews Logo' width={150} height={75} />
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
				<a className={headerStyles.link}>
					<BsHouseFill fontSize={30} />
				</a>
			</Link>
			<VerticalDivider />
			<Link href='/' passHref>
				<a className={headerStyles.link}>CONSERVATION</a>
			</Link>
			<VerticalDivider />
			<Link href='/' passHref>
				<a className={headerStyles.link}>SANTE</a>
			</Link>
			<VerticalDivider />
			<Link href='/' passHref>
				<a className={headerStyles.link}>FORET</a>
			</Link>
			<VerticalDivider />
			<Link href='/' passHref>
				<a className={headerStyles.link}>ENVIRONNEMENT</a>
			</Link>
			<VerticalDivider />
			<Link href='/' passHref>
				<a className={headerStyles.link}>CLIMAT</a>
			</Link>
			<VerticalDivider />
			<Link href='/' passHref>
				<a className={headerStyles.link}>BIODIVESERSITE</a>
			</Link>
			<VerticalDivider />
			<Link href='/' passHref>
				<a className={headerStyles.link}>ENERGIE</a>
			</Link>
			<VerticalDivider />
			<Link href='/' passHref>
				<a className={headerStyles.link}>POLLUTION</a>
			</Link>
			<VerticalDivider />
			<Link href='/' passHref>
				<a className={headerStyles.link}>AUTRES</a>
			</Link>
			<VerticalDivider />
			<Link href='/' passHref>
				<a className={headerStyles.link}>DOSSIER</a>
			</Link>
			<VerticalDivider />
			<Link href='/' passHref>
				<a className={headerStyles.link}>OPPORTUNITE</a>
			</Link>
		</div>
	);
};

const VerticalDivider: React.FC = () => {
	return <div className={headerStyles.divider}></div>;
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
