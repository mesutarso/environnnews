import React, { useState } from 'react';
import Head from 'next/head';
import heroStyles from '../styles/Hero.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import BreakingNews from '../components/BreakingNews';
import Articles from '../components/Articles';
import Opportunities from '../components/Opportunities';
import Categories from '../components/Categories';

export interface IState {
	breakingNews: {
		id: string;
		title: string;
		description: string;
	}[];
}

export interface IArticles {
	articles: {
		id: string;
		image: string;
		category: string;
		description: string;
		author?: string;
	}[];
}

export interface IOpportunities {
	opportunities: {
		id: string;
		description: string;
	}[];
}

export default function Home() {
	const [breakingNews, setBreakingNews] = useState<IState['breakingNews']>([
		{
			id: '334',
			title: 'Covid en Rdc',
			description: 'Corona virus is a virus, okay!',
		},
		{
			id: '45',
			title: 'Covid en Rdc',
			description: 'Corona virus is a virus, okay!',
		},
		{
			id: '88',
			title: 'Covid en Rdc',
			description: 'Corona virus is a virus, okay!',
		},
	]);

	const [articles, setArticles] = useState<IArticles['articles']>([
		{
			id: '1',
			image: '/assets/bird.jpg',
			category: 'climat',
			description:
				'Corrupti explicabo voluptates soluta asperiores? Tenetur magni molestias exercitationem alias, dignissimos quos earum recusandae?',
			author: 'Emmanuella Mulanga',
		},
		{
			id: '2',
			image: '/assets/bird.jpg',
			category: 'biodiversite',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor consequuntur perferendis tenetur vero laborum quia sequi ',
			author: 'Beni Map',
		},
		{
			id: '3',
			image: '/assets/bird.jpg',
			category: 'conservation',
			description:
				'Corrupti explicabo voluptates soluta asperiores? Tenetur magni molestias exercitationem alias, dignissimos quos earum recusandae?',
			author: 'Marcos Musafiri',
		},
		{
			id: '4',
			image: '/assets/bird.jpg',
			category: 'conservation',
			description:
				'Corrupti explicabo voluptates soluta asperiores? Tenetur magni molestias exercitationem alias, dignissimos quos earum recusandae?',
			author: 'Marcos Musafiri',
		},
	]);

	const [opportunities, setOpportunities] = useState<
		IOpportunities['opportunities']
	>([
		{
			id: '23',
			description: "Bourse d'Etude aux USA",
		},
		{
			id: '24',
			description: "Bourse d'Etude aux USA",
		},
	]);

	return (
		<div>
			<Head>
				<title>Environews RDC</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<div className='container'>
				<div className={`row ${heroStyles.hero}`}>
					<div className='col-md-8 col-sm-12'>
						<Articles articles={articles} />
					</div>
					<div className='col-md-4 col-sm-12'>
						<BreakingNews breakingNews={breakingNews} />
						<br />
						<Opportunities opportunities={opportunities} />
						<br />
						<div className={heroStyles.pub}></div>
					</div>
				</div>
				<Categories articles={articles} title='conservation' />
				<Categories articles={articles} title='environement' />
				<Categories articles={articles} title='biodiversite' />
			</div>
		</div>
	);
}
