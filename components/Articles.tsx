import Image from 'next/image';
import Link from 'next/link';
import { IArticles } from '../pages';

import articleStyles from '../styles/Article.module.css';

export const ArticleCard = ({ article, size, imageHeight, imageWidth }) => {
	return (
		<div className={`col-md-${size} col-12 ${articleStyles.card}`}>
			<Link href='/articles/[id]' as={`articles/${article.id}`}>
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