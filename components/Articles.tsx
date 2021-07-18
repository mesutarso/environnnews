/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { IArticles } from '../pages';

import articleStyles from '../styles/Article.module.css';

export const ArticleCard = ({ article, size, imageHeight, imageWidth }) => {
	let postImgCat =
		(article.node.featuredImage !== null
			? article.node.featuredImage.node.mediaItemUrl
			: '/assets/not_found.jpg') || article.node.featuredImage.node.sourceUrl;

	return (
		<div className={`col-md-${size} mb-4 col-12 ${articleStyles.card}`}>
			<Link href='/[annee]/[mois]/[jour]/[slug]' as={`${article.node.uri}`}>
				<a>
					<img
						src={`${postImgCat}`}
						alt={article.node.title}
						className='w-100'
						height={imageHeight}
						style={{ objectFit: 'cover' }}
					/>
					<br />
					<h5 className={`mt-3 mb-1 ${articleStyles.title}`}>
						{article.node.title.split(':').length == 2
							? article.node.title.split(':')[0]
							: null}
					</h5>
					<span className={articleStyles.description}>
						{article.node.title.split(':').length == 2
							? article.node.title.split(':')[1]
							: article.node.title.split(':')[0]}
					</span>
					<span className={articleStyles.author}>Marcos Musafiri</span>
				</a>
			</Link>
		</div>
	);
};

export const TopArticle = ({ article, index }) => {
	return (
		<div className={articleStyles.topArticle}>
			<Link href='[slug]' as={`${article.node.slug}`} passHref>
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

export const SimilarArticle = ({ article }) => {
	return (
		<div className={articleStyles.topArticle}>
			<Link href='[slug]' as={`${article.node.slug}`} passHref>
				<a>
					<div className='row'>
						<div className='col-md-4'>
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
					key={article.node.id}
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
