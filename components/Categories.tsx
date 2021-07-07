import Link from 'next/link';
import { IArticles } from '../pages';
import { ArticleCard } from './Articles';
import articleStyles from '../styles/Article.module.css';
import heroStyles from '../styles/Hero.module.css';

const Categories = ({ articles, title }) => {
	return (
		<div>
			<div className={articleStyles.sectionTitle}>
				<h5
					className={`border-start px-3 border-success border-5 ${heroStyles.title}`}>
					{title}
				</h5>
				<Link href='/categories/[name]' as={`/categories/${title}`} passHref>
					<a>Voir Plus</a>
				</Link>
			</div>
			<div
				className={`row d-flex justify-content-center ${articleStyles.category}`}>
				{articles.map((article) => (
					<ArticleCard
						key={article.id}
						article={article}
						size={3}
						imageHeight={220}
						imageWidth={320}
					/>
				))}
			</div>
		</div>
	);
};

export default Categories;
