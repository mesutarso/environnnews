import React, { useState } from 'react';
import Head from 'next/head';
import heroStyles from '../styles/Hero.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import BreakingNews from '../components/BreakingNews';
import Articles from '../components/Articles';
import Opportunities from '../components/Opportunities';

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
			category: 'conservation',
			description: 'blablabla',
			author: 'Marcos',
		},
		{
			id: '2',
			image: '/assets/bird.jpg',
			category: 'conservation',
			description: 'blablabla',
			author: 'Marcos',
		},
		{
			id: '3',
			image: '/assets/bird.jpg',
			category: 'conservation',
			description: 'blablabla',
			author: 'Marcos',
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
		<div className='container'>
			<Head>
				<title>Environews RDC</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<div className={`row ${heroStyles.hero}`}>
				<div className='col-md-8 col-sm-12'>
					<Articles articles={articles} />
				</div>
				<div className='col-md-4 col-sm-12'>
					<h5
						className={`border-start px-3 border-success border-5 ${heroStyles.title}`}>
						BREAKING NEWS
					</h5>
					<BreakingNews breakingNews={breakingNews} />
					<br />
					<br />
					<Opportunities opportunities={opportunities} />
				</div>
			</div>
		</div>
	);
}
