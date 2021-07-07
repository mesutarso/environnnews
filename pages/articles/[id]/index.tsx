import React, { useState } from 'react';
import articleStyles from '../../../styles/Article.module.css';
import Image from 'next/image';
import Comments from '../../../components/Comment';
import {
	FaFacebookSquare,
	FaInstagramSquare,
	FaLinkedinIn,
	FaTwitter,
	FaYoutubeSquare,
} from 'react-icons/fa';
import Link from 'next/link';
import { IArticles } from '../..';
import { TopArticle } from '../../../components/Articles';

export interface IComments {
	comments: {
		id: string;
		pseudo: string;
		description: string;
		date: string;
	}[];
}

const Article = () => {
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

	const [comments, setComments] = useState<IComments['comments']>([
		{
			id: '34',
			pseudo: ' Beni Mapunina',
			description: 'This is what you want I guess',
			date: '24th july 2012',
		},
		{
			id: '35',
			pseudo: ' Beni Mapunina',
			description: 'This is what you want I guess',
			date: '24th july 2012',
		},
	]);
	return (
		<div className={`container ${articleStyles.articleContent}`}>
			<h4 className='border-start px-3 border-success border-5'>CORONAVIRUS</h4>
			<h5>
				Tshisekedi et les mesures draconiennes, et si la solution à la 3ème
				vague était congolaise ?
			</h5>
			<div className='row'>
				<div className='col-md-9 col-sm-12'>
					<Image src='/assets/bird.jpg' height={500} width={1000} />
					<div>
						<Link href='/'>
							<a>
								<FaFacebookSquare
									className='mx-1 mt-3'
									style={{ fontSize: '1.5rem' }}
								/>
							</a>
						</Link>
						<Link href='/'>
							<a>
								<FaTwitter
									className='mx-1 mt-3'
									style={{ fontSize: '1.5rem' }}
								/>
							</a>
						</Link>
						<Link href='/'>
							<a>
								<FaLinkedinIn
									className='mx-1 mt-3'
									style={{ fontSize: '1.5rem' }}
								/>
							</a>
						</Link>
						<Link href='/'>
							<a>
								{' '}
								<FaInstagramSquare
									className='mx-1 mt-3'
									style={{ fontSize: '1.5rem' }}
								/>
							</a>
						</Link>
						<Link href='/'>
							<a>
								<FaYoutubeSquare
									className='mx-1 mt-3'
									style={{ fontSize: '1.5rem' }}
								/>
							</a>
						</Link>
					</div>
					<br />
					<h6>Emmanula Mulanga</h6>
					<br />
					<div>
						<p>
							Corrupti explicabo voluptates soluta asperiores? Tenetur magni
							molestias exercitationem alias, dignissimos quos earum
							recusandae?Corrupti explicabo voluptates soluta asperiores?
							Tenetur magni molestias exercitationem alias, dignissimos quos
							earum recusandae?Corrupti explicabo voluptates soluta asperiores?
							Tenetur magni molestias exercitationem alias, dignissimos quos
							earum recusandae?Corrupti explicabo voluptates soluta asperiores?
							Tenetur magni molestias exercitationem alias, dignissimos quos
							earum recusandae?
						</p>
						<p>
							Corrupti explicabo voluptates soluta asperiores? Tenetur magni
							molestias exercitationem alias, dignissimos quos earum
							recusandae?Corrupti explicabo voluptates soluta asperiores?
							Tenetur magni molestias exercitationem alias, dignissimos quos
							earum recusandae?Corrupti explicabo voluptates soluta asperiores?
							Tenetur magni molestias exercitationem alias, dignissimos quos
							earum recusandae?Corrupti explicabo voluptates soluta asperiores?
							Tenetur magni molestias exercitationem alias, dignissimos quos
							earum recusandae?
						</p>
						<p>
							Corrupti explicabo voluptates soluta asperiores? Tenetur magni
							molestias exercitationem alias, dignissimos quos earum
							recusandae?Corrupti explicabo voluptates soluta asperiores?
							Tenetur magni molestias exercitationem alias, dignissimos quos
							earum recusandae?Corrupti explicabo voluptates soluta asperiores?
							Tenetur magni molestias exercitationem alias, dignissimos quos
							earum recusandae?Corrupti explicabo voluptates soluta asperiores?
							Tenetur magni molestias exercitationem alias, dignissimos quos
							earum recusandae?
						</p>
						<p>
							Corrupti explicabo voluptates soluta asperiores? Tenetur magni
							molestias exercitationem alias, dignissimos quos earum
							recusandae?Corrupti explicabo voluptates soluta asperiores?
							Tenetur magni molestias exercitationem alias, dignissimos quos
							earum recusandae?Corrupti explicabo voluptates soluta asperiores?
							Tenetur magni molestias exercitationem alias, dignissimos quos
							earum recusandae?Corrupti explicabo voluptates soluta asperiores?
							Tenetur magni molestias exercitationem alias, dignissimos quos
							earum recusandae?
						</p>
						<p>
							Corrupti explicabo voluptates soluta asperiores? Tenetur magni
							molestias exercitationem alias, dignissimos quos earum
							recusandae?Corrupti explicabo voluptates soluta asperiores?
							Tenetur magni molestias exercitationem alias, dignissimos quos
							earum recusandae?Corrupti explicabo voluptates soluta asperiores?
							Tenetur magni molestias exercitationem alias, dignissimos quos
							earum recusandae?Corrupti explicabo voluptates soluta asperiores?
							Tenetur magni molestias exercitationem alias, dignissimos quos
							earum recusandae?
						</p>
					</div>
					<div className={`row ${articleStyles.footer}`}>
						<div className='col-md-5 col-sm-12'>
							<h4 className='border-start px-2 border-success border-5'>
								LAISSER UN COMMENTAIRE
							</h4>
							<div className={articleStyles.form}>
								<input type='text' placeholder='Pseudo' />
								<textarea placeholder='Comment'></textarea>
								<button>Envoyer</button>
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
							{articles.map((article) => {
								return (
									<Link
										href='/articles/[id]'
										as={`/articles/${article.id}`}
										passHref>
										<a>
											<div className='row'>
												<div className='col-md-4'>
													<Image
														src={article.image}
														alt={article.description}
														width={150}
														height={100}
													/>
												</div>
												<div className='col-md-8'>
													<h5>{article.category}</h5>
													<span>{article.description}</span>
													<br />
													<span className={articleStyles.author_}>
														{article.author}
													</span>
												</div>
											</div>
										</a>
									</Link>
								);
							})}
						</div>
					</div>
					<div className={articleStyles.newsLetter}>
						<h3>NEWSLETTER</h3>
						<form>
							<input type='email' placeholder='Adresse Email' />
							<p>
								Inscrivez-vous à notre newsletter pour vous tenir au courant de
								nos activités.
							</p>
							<button>S'INSCRIRE</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Article;
