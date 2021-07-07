import Image from 'next/image';
import { IArticles } from '../pages';

import articleStyles from '../styles/Article.module.css';

export const ArticleCard = ({ article }) => {
	return (
		<div className='col-md-4 col-12'>
			<Image
				src={article.image}
				alt={article.description}
				width={400}
				height={300}
			/>
			<h5 className={`text-success ${articleStyles.title}`}>
				{article.category}
			</h5>
			<span className={articleStyles.description}>{article.description}</span>
			<br />
			<span className={articleStyles.author}>{article.author}</span>
		</div>
	);
};

const Articles: React.FC<IArticles> = ({ articles }) => {
	return (
		<div className='row d-flex justify-content-center'>
			{articles.map((article) => (
				<ArticleCard key={article.id} article={article} />
			))}
		</div>
	);
};

export default Articles;
