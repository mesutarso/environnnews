/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import heroStyles from '../styles/Hero.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import BreakingNews from '../components/BreakingNews';
import Articles, { TopArticle } from '../components/Articles';
import Opportunities from '../components/Opportunities';
import Categories from '../components/Categories';
import client from '../graphql/uri';
import {
	GET_OPPORTUNITIES,
	GET_NEWS,
	GET_PUBS,
	GET_BREAKING_NEWS,
	GET_POSTS,
} from '../graphql/queries';

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

export default function Home({ opportunities, news, pubs, breakingNews }) {
	console.log('Opportunities:', opportunities);
	console.log('News:', news);
	console.log('Pubs:', pubs);
	console.log('BreakingNews:', breakingNews);

	const [breakingNews_, setBreakingNews] = useState<IState['breakingNews']>([
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

	const [opportunities_, setOpportunities] = useState<
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
		{
			id: '25',
			description: "Bourse d'Etude aux USA",
		},
		{
			id: '26',
			description: "Bourse d'Etude aux USA",
		},
	]);

	return (
		<div>
			<Head>
				<title>Environews RDC </title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<div className='container'>
				<div className={`row ${heroStyles.hero}`}>
					<div className='col-md-8 col-sm-12'>
						<div className={heroStyles.topNews}>
							<Link href='/articles/[id]' as='/articles/1'>
								<a>
									<h5
										className={`border-start px-3 border-success border-5 ${heroStyles.title}`}>
										CORONAVIRUS
									</h5>
									<Image
										src='/assets/bird.jpg'
										alt='feature image'
										height={350}
										width={800}
									/>
									<h4>
										Tshisekedi et les mesures draconiennes, et si la solution à
										la 3ème vague était congolaise ?
									</h4>
									<span>Christopher Buhendwa</span>
								</a>
							</Link>
						</div>
						<Articles articles={articles} />
					</div>
					<div className='col-md-4 col-sm-12'>
						<BreakingNews breakingNews={breakingNews_} />
						<br />
						<Opportunities opportunities={opportunities_} />
						<br />
						<div className={heroStyles.pub}></div>
					</div>
				</div>
				<Categories articles={articles} title='conservation' />
				<Categories articles={articles} title='environement' />
				<Categories articles={articles} title='biodiversite' />
				<div className='row'>
					<div className='col-md-7 col-sm-12'>
						<h5 className='border-start px-3 border-success border-5'>
							CHOIX DE L’EDITEUR
						</h5>
					</div>
					<div className='col-md-5 col-sm-12'>
						<h5 className='border-start px-3 border-success border-5'>
							TOP ARTICLES
						</h5>
						<div>
							{articles.map((article, index) => (
								<TopArticle key={article.id} article={article} index={index} />
							))}
						</div>
					</div>
				</div>
			</div>
			<div className={heroStyles.newsLetter}>
				<h3>NEWSLETTER</h3>
				<form>
					<input
						className='form-control form-control-lg'
						type='email'
						placeholder='Email Address'></input>
					<p>
						Inscrivez-vous à notre newsletter pour vous tenir au courant de nos
						activités.
					</p>
					<button className='btn btn-success'>S'INSCRIRE</button>
				</form>
			</div>
		</div>
	);
}

export async function getServerSideProps() {
	const opportunities = await client.query({ query: GET_OPPORTUNITIES });
	const news = await client.query({ query: GET_NEWS });
	const pubs = await client.query({ query: GET_PUBS });
	const breakingNews = await client.query({ query: GET_BREAKING_NEWS });

	return {
		props: {
			news: news.data.posts.edges,
			pubs: pubs.data.publicites.edges,
			opportunities: opportunities.data.posts.edges,
			breakingNews: breakingNews.data.breakingNews.edges,
		},
	};
}
