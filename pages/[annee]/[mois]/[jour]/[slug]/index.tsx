/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import articleStyles from '../../../../../styles/Article.module.css';
import Image from 'next/image';
import Comments from '../../../../../components/Comment';
import { GetServerSideProps } from 'next';
import {
	FaFacebookSquare,
	FaInstagramSquare,
	FaLinkedinIn,
	FaTwitter,
	FaYoutubeSquare,
	FaCalendar,
	FaEye,
	FaRegUser,
	FaWhatsappSquare,
} from 'react-icons/fa';

import Link from 'next/link';
import client from '../../../../../graphql/uri';
import { GET_NEWS, GET_POSTS_SLUG } from '../../../../../graphql/queries';
import { IArticles } from '../../../../categories/[name]/index';
import { SimilarArticle } from '../../../../../components/Articles';

export interface IComments {
	comments: {
		id: string;
		pseudo: string;
		description: string;
		date: string;
	}[];
}

const Article = ({ article, news }) => {
	let deleteFig = article.content.replace(
		/(figure|img)/,
		'$1 style="display:none"'
	);
	const content = deleteFig.replace(
		/(style='width:44px;left: -10px;top: 100px;-webkit-box-shadow:none;box-shadow:none;')/,
		`style='display:none'`
	);

	console.log(content);

	const [comments, setComments] = useState<IComments['comments']>([
		{
			id: '34',
			pseudo: ' Beni Mampunina',
			description: 'This is what you want I guess',
			date: '24th july 2012',
		},
		{
			id: '35',
			pseudo: ' Beni Mampunina',
			description: 'This is what you want I guess',
			date: '24th july 2012',
		},
		{
			id: '36',
			pseudo: ' Beni Mampunina',
			description: 'This is what you want I guess',
			date: '24th july 2012',
		},
	]);

	const [articles, setArticles] = useState<IArticles['articles']>(news);
	const filteredArticlesSix = articles.filter((item, key) => key < 4);

	return (
		<div className={`container ${articleStyles.articleContent}`}>
			<h4 className='border-start px-3 border-success border-5'>
				{article.title.split(':').length === 2
					? article.title.split(':')[0].toUpperCase()
					: 'Environews'}
			</h4>
			<h5 className={articleStyles.articleTitle}>
				{article.title.split(':').length === 2
					? article.title.split(':')[1]
					: article.title.split(':')[0]}
			</h5>
			<div className='row'>
				<div className='col-md-9 col-sm-12'>
					<img
						src={
							article.featuredImage === null
								? '/assets/not_found.jpg'
								: article.featuredImage.node.mediaItemUrl
						}
						alt={article.title}
						className='w-100'
						height={500}
						style={{ objectFit: 'cover' }}
					/>
					<div className={articleStyles.tags}>
						<li>
							<FaRegUser /> Christian Mwanya
						</li>
						<li>
							<FaCalendar /> {new Date(article.date).toLocaleString()}
						</li>
						<li>
							<FaEye /> 243
						</li>
					</div>

					<div style={{ padding: '0px 0px 0px 10px' }}>
						<Link href='/'>
							<a>
								<FaFacebookSquare
									className='mx-1 mt-3'
									style={{ fontSize: '1.5rem', color: 'darkblue' }}
								/>
							</a>
						</Link>
						<Link href='/'>
							<a>
								<FaTwitter
									className='mx-1 mt-3'
									style={{ fontSize: '1.5rem', color: 'steelblue' }}
								/>
							</a>
						</Link>
						<Link href='/'>
							<a>
								<FaWhatsappSquare
									className='mx-1 mt-3'
									style={{ fontSize: '1.5rem', color: 'green' }}
								/>
							</a>
						</Link>
						<Link href='/'>
							<a>
								<FaLinkedinIn
									className='mx-1 mt-3'
									style={{ fontSize: '1.5rem', color: 'blue' }}
								/>
							</a>
						</Link>
					</div>
					<br />

					<article dangerouslySetInnerHTML={{ __html: content }}></article>

					<div className={`row ${articleStyles.footer}`}>
						<div className='col-md-5 col-sm-12'>
							<h4 className='border-start px-2 border-success border-5'>
								LAISSER UN COMMENTAIRE
							</h4>
							<div className={articleStyles.form}>
								<input
									className='form-control form-control-lg'
									type='text'
									placeholder='Pseudo'
								/>
								<textarea
									className='form-control'
									placeholder='Commentaire'></textarea>
								<button className='btn btn-success'>Envoyer</button>
							</div>
						</div>
						<div className='col-md-1 col-sm-12'></div>
						<div className='col-md-6 col-sm-12'>
							<h4 className='border-start px-2 border-success border-5'>
								DERNIERS COMMENTAIRES
							</h4>
							<Comments comments={comments} />
						</div>
					</div>
				</div>
				<div className='col-md-3 col-sm-12'>
					<div className={articleStyles.pub}></div>
					<div className={articleStyles.similarContainer}>
						<h6 className='border-start px-2 border-success border-5'>
							A LIRE AUSSI
						</h6>
						{filteredArticlesSix.map((article) => (
							<SimilarArticle key={article.node.id} article={article} />
						))}
					</div>
					<div className={articleStyles.newsLetter}>
						<h3>NEWSLETTER</h3>
						<form>
							<input
								className='form-control form-control-lg'
								type='email'
								placeholder='Email Address'></input>
							<p>
								Inscrivez-vous à notre newsletter pour vous tenir au courant de
								nos activités.
							</p>
							<button className='btn btn-success'>S'INSCRIRE</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Article;

export const getServerSideProps = async (context) => {
	const article = await client.query({
		query: GET_POSTS_SLUG(context.params.slug),
	});
	const news = await client.query({ query: GET_NEWS });

	return {
		props: {
			article: article.data.post,
			news: news.data.posts.edges,
		},
	};
};
