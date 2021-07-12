/* eslint-disable @next/next/no-img-element */
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
import { GetStaticProps } from 'next';

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

export default function Home({ data }) {
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

				<div className={`col-md-12 p-0 ${heroStyles.position_relative}`}>
					<div className={heroStyles.img_dark}>
						<h5
							className={`border-start px-3 border-success border-5 ${heroStyles.tv_title}`}>
							ENVIRONEWS TV
						</h5>
						<div className='row'>
							<div className='col-md-1 col-sm-1'></div>
							<div className='col-md-7 col-sm-12'>
								<div className={heroStyles.video_responsive}>
									<iframe
										width='853'
										height='480'
										src={`https://www.youtube.com/embed/YkmSQZP7bn8`}
										frameBorder='1'
										allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
										allowFullScreen
										title='Embedded youtube'
									/>
								</div>
							</div>
							<div className='col-md-4 col-sm-12'>
								<div className='row'>
									<div className='col-md-4'>
										<iframe
											width='120'
											height='90'
											src={`https://www.youtube.com/embed/YkmSQZP7bn8`}
											frameBorder='1'
											allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
											allowFullScreen
											title='Embedded youtube'
										/>
									</div>
									<div className='col-md-8'>
										<p>
											Le Parc national de Kahuzi-Biega détient désormais 60% de
											la population mondiale des gorilles de Grauer
										</p>
									</div>
								</div>
								<div className='row'>
									<div className='col-md-4'>
										<iframe
											width='120'
											height='90'
											src={`https://www.youtube.com/embed/YkmSQZP7bn8`}
											frameBorder='1'
											allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
											allowFullScreen
											title='Embedded youtube'
										/>
									</div>
									<div className='col-md-8'>
										<p>
											Le Parc national de Kahuzi-Biega détient désormais 60% de
											la population mondiale des gorilles de Grauer
										</p>
									</div>
								</div>
								<div className='row'>
									<div className='col-md-4'>
										<iframe
											width='120'
											height='90'
											src={`https://www.youtube.com/embed/YkmSQZP7bn8`}
											frameBorder='1'
											allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
											allowFullScreen
											title='Embedded youtube'
										/>
									</div>
									<div className='col-md-8'>
										<p>
											Le Parc national de Kahuzi-Biega détient désormais 60% de
											la population mondiale des gorilles de Grauer
										</p>
									</div>
								</div>
								<div className='row'>
									<div className='col-md-4'>
										<iframe
											width='120'
											height='90'
											src={`https://www.youtube.com/embed/YkmSQZP7bn8`}
											frameBorder='1'
											allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
											allowFullScreen
											title='Embedded youtube'
										/>
									</div>
									<div className='col-md-8'>
										<p>
											Le Parc national de Kahuzi-Biega détient désormais 60% de
											la population mondiale des gorilles de Grauer
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<img
						data-testid='img-banner'
						src='/assets/tvbg.jpg'
						alt='image a la une'
						className={`w-100`}
						style={{ height: '100%', objectFit: 'cover' }}
					/>
				</div>

				<div className='row py-5'>
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
			<div className={`mt-4 ${heroStyles.newsLetter}`}>
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

export const getStaticProps: GetStaticProps = () => {
	const data = 100;
	return {
		props: {
			data,
		},
	};
};
