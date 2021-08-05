/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';
import articleStyles from '../../../styles/Article.module.css';
import Image from 'next/image';
import Comments from '../../../components/Comment';
import { useRouter } from 'next/router';
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
import client from '../../../graphql/uri';
import { GET_NEWS, GET_BREAKING_NEWS_POST } from '../../../graphql/queries';
import { IArticles } from '../../categories/[name]/index';
import { SimilarArticle } from '../../../components/Articles';

export interface IComments {
	comments: {
		id: string;
		pseudo: string;
		description: string;
		date: string;
	}[];
}

const Article = ({ article, news }) => {
	//let deleteFig2 = article.content.indexOf('src');
	//let deleteFig3 = article.content.lastIndexOf('jpg');
	//let img = article.content.slice(deleteFig2, deleteFig3);
	//let alt = img.indexOf('alt');
	//let src = img.slice(5, alt - 2);

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

	console.log('Breaking News', article);
	const [articles, setArticles] = useState<IArticles['articles']>();

	return (
		<div className={`container ${articleStyles.articleContent}`}>
			<div className='row'>
				<div className='col-md-9 col-sm-12'>
					<h4 className='border-start px-3 border-success border-5'>
						{article.title.split(':').length === 2
							? article.title.split(':')[0].toUpperCase()
							: 'Breaking News'}
					</h4>
					<h5 className={articleStyles.articleTitle}>
						{article.title.split(':').length === 2
							? article.title.split(':')[1]
							: article.title.split(':')[0]}
					</h5>
					<img
						src='/assets/not_found.jpg'
						alt={'beni'}
						className='w-100'
						height={500}
						style={{ objectFit: 'cover' }}
					/>
					<br />
				</div>
				<div className='col-md-3 col-sm-12'>
					<div className={articleStyles.pub}></div>
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
		query: GET_BREAKING_NEWS_POST(context.query.slug),
	});

	return {
		props: {
			article: article.data.breakingNew,
		},
	};
};
