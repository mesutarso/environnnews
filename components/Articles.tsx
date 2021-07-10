import Image from 'next/image';
import Link from 'next/link';
import { IArticles } from '../pages';

import articleStyles from '../styles/Article.module.css';

export const ArticleCard = ({ article, size, imageHeight, imageWidth }) => {
	return (
		<div className={`col-md-${size} mb-4 col-12 ${articleStyles.card}`}>
			<Link href={`../articles/${article.id} ` || `articles/${article.id} `}>
				<a>
					<Image
						src={article.image}
						alt={article.description}
						width={imageWidth}
						height={imageHeight}
					/>
					<h5 className={` ${articleStyles.title}`}>{article.category}</h5>
					<span className={articleStyles.description}>
						{article.description}
					</span>
					<br />
					<span className={articleStyles.author}>{article.author}</span>
				</a>
			</Link>
		</div>
	);
};

export const TopArticle = ({ article, index }) => {
	return (
		<div className={articleStyles.topArticle}>
			<Link href='/articles/[id]' as={`articles/${article.id}`} passHref>
				<a>
					<div className='row'>
						<div className='col-md-1'>
							<h1>{index + 1}</h1>
						</div>
						<div className='col-md-3'>
							<Image
								src={article.image}
								alt={article.description}
								width={130}
								height={75}
							/>
						</div>
						<div className='col-md-7'>
							<h5
								style={{
									fontSize: '0.75rem',
									color: '#089047',
									textTransform: 'uppercase',
								}}>
								{article.category}
							</h5>
							<div
								style={{
									fontSize: '0.70rem',
									overflow: 'hidden',
									whiteSpace:'nowrap',
									textOverflow: 'ellipsis',
									
								}}>
								{article.description}
							</div>
							<span style={{color: '#a09b9b',
	fontSize: 'small',
	fontWeight: '300'}}>{article.author}</span>
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
