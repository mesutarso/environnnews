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
} from 'react-icons/fa';
import Link from 'next/link';
import { IArticles } from '../../../../';
import { TopArticle } from '../../../../../components/Articles';
import client from '../../../../../graphql/uri';
import { GET_POSTS_SLUG } from '../../../../../graphql/queries';

export interface IComments {
	comments: {
		id: string;
		pseudo: string;
		description: string;
		date: string;
	}[];
}

const Article = ({ article }) => {
	const featuredImage =
		article.featuredImage == null
			? '/assets/not_found.jpg'
			: article.featuredImage.node.mediaItemUrl;
	let deleteFig = article.content.replace(
		/(figure|img)/,
		'$1 style="display:none"'
	);
	const content = deleteFig.replace(
		/(style='width:44px;left: -10px;top: 100px;-webkit-box-shadow:none;box-shadow:none;')/,
		`style='display:none'`
	);

	console.log('content:', content);
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
	]);
	return (
		<div className={`container ${articleStyles.articleContent}`}>
			<h3 className='border-start px-2 mt-4 border-success border-5'>
				{article.title.split(':').length == 2
					? article.title.split(':')[0]
					: null}
			</h3>
			<h5 className={articleStyles.article_title}>
				{article.title.split(':').length == 2
					? article.title.split(':')[1]
					: article.title.split(':')[0]}
			</h5>
			<div className='row'>
				<div className='col-md-9 col-sm-12'>
					<img
						src={featuredImage}
						alt={article.title}
						className='w-100'
						height={500}
						style={{ objectFit: 'cover' }}
					/>
					<div>
						<br />
						<Link href='/'>
							<a>
								<FaFacebookSquare
									className='mx-1 mt-3 text-primary'
									style={{ fontSize: '2rem' }}
								/>
							</a>
						</Link>
						<Link href='/'>
							<a>
								<FaTwitter
									className='mx-1 mt-3 text-info'
									style={{ fontSize: '2rem' }}
								/>
							</a>
						</Link>
						<Link href='/'>
							<a>
								<FaLinkedinIn
									className='mx-1 mt-3 '
									style={{ fontSize: '2rem', color: '#0077b5' }}
								/>
							</a>
						</Link>
						<Link href='/'>
							<a>
								{' '}
								<FaInstagramSquare
									className='mx-1 mt-3 '
									style={{ fontSize: '2rem', color: '#ac2bac' }}
								/>
							</a>
						</Link>
						<Link href='/'>
							<a>
								<FaYoutubeSquare
									className='mx-1 mt-3 text-danger'
									style={{ fontSize: '2rem' }}
								/>
							</a>
						</Link>
					</div>
					<br />

					<article dangerouslySetInnerHTML={{ __html: content }}></article>

					<br />

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
					<div style={{ paddingTop: '20px' }}>
						<h6 className='border-start px-2 border-success border-5'>
							A LIRE AUSSI
						</h6>
						<div className={articleStyles.similar}>
							{/*
        {articles.map((article) => {
								return (
									<Link
										key={article.node.id}
										href='/articles/[id]'
										as={`/articles/${article.node.id}`}
										passHref>
										<a>
											<div className='row'>
												<div className='col-md-4'>
													<Image
														src={article.node.featuredImage.node.mediaItemUrl}
														alt={article.node.title}
														width={150}
														height={100}
													/>
												</div>
												<div className='col-md-8'>
													<h5>{article.node.title}</h5>
													<span>{article.node.title}</span>
													<br />
													<span className={articleStyles.author_}>
														{article.node.author}
													</span>
												</div>
											</div>
										</a>
									</Link>
								);
							})}
        */}
						</div>
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

	return {
		props: {
			article: article.data.post,
		},
	};
};
