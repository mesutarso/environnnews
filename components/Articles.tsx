/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import { IArticles } from '../pages';

import articleStyles from '../styles/Article.module.css';

export const ArticleCard = ({ article, size, imageHeight, imageWidth }) => {
	let postImgCat =
		(article.node.featuredImage !== null
			? article.node.featuredImage.node.mediaItemUrl
			: '/assets/not_found.jpg') || article.node.featuredImage.node.sourceUrl;

	return (
		<div
			className={`col-sm-${size} mb-4 col-12 col-lg-${size} ${articleStyles.card}`}>
			<Link href='[slug]' as={`${article.node.uri.toString()}`}>
				<a>
					<img
						src={`${postImgCat}`}
						alt={article.node.title}
						className='w-100'
						height={imageHeight}
						style={{ objectFit: 'cover' }}
					/>
					<br />
					<h5 className={` ${articleStyles.title}`}>{article.node.title}</h5>
					<article
						className={articleStyles.description}
						dangerouslySetInnerHTML={{
							__html: article.node.content.slice(0, 180),
						}}></article>

					<span className={articleStyles.author}>Marcos Musafiri</span>
				</a>
			</Link>
		</div>
	);
};

export const TopArticle = ({ article, index }) => {
	return (
		<div className={articleStyles.topArticle}>
			<Link href='/articles/[id]' as={`articles/${article.node.id}`} passHref>
				<a>
					<div className='row'>
						<div className='col-md-1'>
							<h1>{index + 1}</h1>
						</div>
						<div className='col-md-3'>
							<img
								src={`${article.node.featuredImage.node.sourceUrl}`}
								alt={article.node.title}
								className='w-100'
							/>
						</div>
						<div className='col-md-7'>
							<h5
								style={{
									fontSize: '0.75rem',
									color: '#089047',
									textTransform: 'uppercase',
								}}>
								{article.node.title}
							</h5>
							<div
								style={{
									fontSize: '0.70rem',
									overflow: 'hidden',
									whiteSpace: 'nowrap',
									textOverflow: 'ellipsis',
								}}></div>
							<span
								style={{
									color: '#a09b9b',
									fontSize: 'small',
									fontWeight: 'lighter',
								}}>
								{article.author}
							</span>
						</div>
					</div>
				</a>
			</Link>
		</div>
	);
};

const Articles: React.FC<IArticles> = ({ articles }) => {
	return (
		<div className='row d-flex justify-content-center'>
			{articles.map((article) => (
				<ArticleCard
					key={article.id}
					article={article}
					size={6}
					imageHeight={250}
					imageWidth={380}
				/>
			))}
		</div>
	);
};

export default Articles;
