/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { IArticles } from '../pages';

import articleStyles from '../styles/Article.module.css';

export const ArticleCard = ({ article, size, imageHeight, imageWidth }) => {
	let deleteFig2 = article.node.content.indexOf('src');
	let deleteFig3 = article.node.content.lastIndexOf('jpg');
	let img = article.node.content.slice(deleteFig2, deleteFig3);
	let alt = img.indexOf('alt');
	let src = img.slice(5, alt - 2);
	let src2 = src.replace(
		/http:\/\/environews-rdc.test:82/,
		'https://a1-environews.kinshasadigital.academy/'
	);

	let image = '/assets/not_found.jpg';

	if (src2.startsWith('https://a1-environews.kinshasadigital.academy/')) {
		image = src2;
	}

	let postImgCat =
		(article.node.featuredImage !== null
			? article.node.featuredImage.node.mediaItemUrl
			: `${image}`) || article.node.featuredImage.node.sourceUrl;

	return (
		<div className={`col-md-${size} mb-4 col-12 ${articleStyles.card}`}>
			<div className={`${articleStyles.card_image}`}>
				<Link
					href='/[annee]/[mois]/[jour]/[slug]'
					as={`${article.node.uri}`}
					passHref>
					<a>
						<img
							src={`${postImgCat}`}
							alt={article.node.title}
							className='w-100'
							height={imageHeight}
							style={{ objectFit: 'cover' }}
						/>{' '}
					</a>
				</Link>
			</div>

			<div className={`${articleStyles.card_text}`}>
				<Link
					href='/[annee]/[mois]/[jour]/[slug]'
					as={`${article.node.uri}`}
					passHref>
					<a>
						<h5 className={`mt-3 mb-1 ${articleStyles.title}`}>
							{article.node.title.split(':').length == 2
								? article.node.title.split(':')[0]
								: 'Environews'}
						</h5>
						<span className={articleStyles.description}>
							{article.node.title.split(':').length == 2
								? article.node.title.split(':')[1]
								: article.node.title.split(':')[0] + '.'}
						</span>
					</a>
				</Link>
			</div>
		</div>
	);
};

export const TopArticle = ({ article, index }) => {
	return (
		<div
			className={` py-4 ${articleStyles.topArticle} ${articleStyles.dashed_border_breaking} `}>
			<Link
				href='/[annee]/[mois]/[jour]/[slug]'
				as={`${article.node.uri}`}
				passHref>
				<a>
					<div className='row'>
						<div className={`col-md-1 col-1 px-2`}>
							<h1 className={`${articleStyles.number}`}>{index + 1}</h1>
						</div>
						<div className='col-md-4 col-4'>
							<img
								src={`${article.node.featuredImage.node.sourceUrl}`}
								alt={article.node.title}
								className='w-100'
							/>
						</div>
						<div className='col-md-6 col-6'>
							<h5 className={`mb-1 ${articleStyles.title}`}>
								{article.node.title.split(':').length == 2
									? article.node.title.split(':')[0]
									: 'Environews'}
							</h5>
							<span className={articleStyles.description}>
								{article.node.title.split(':').length == 2
									? article.node.title.split(':')[1]
									: article.node.title.split(':')[0] + '.'}
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
			<Link href='/[annee]/[mois]/[jour]/[slug]' as={`${article.node.uri}`}>
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
							<h5 className={`mb-1 ${articleStyles.title}`}>
								{article.node.title.split(':').length == 2
									? article.node.title.split(':')[0]
									: null}
							</h5>
							<span className={articleStyles.description}>
								{article.node.title.split(':').length == 2
									? article.node.title.split(':')[1]
									: article.node.title.split(':')[0]}
							</span>
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
