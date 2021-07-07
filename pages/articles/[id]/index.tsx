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

export interface IComments {
	comments: {
		id: string;
		pseudo: string;
		description: string;
		date: string;
	}[];
}

const Article = () => {
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
				<div className='col-md-8 col-sm-12'>
					<Image src='/assets/bird.jpg' height={400} width={800} />
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
					</div>
				</div>
				<div className='col-md-4 col-sm-12'>cool</div>
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
	);
};

export default Article;
