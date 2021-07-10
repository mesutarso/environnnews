import Link from 'next/link';
import { IArticles } from '../pages';
import { ArticleCard } from './Articles';
import articleStyles from '../styles/Article.module.css';
import heroStyles from '../styles/Hero.module.css';
import { FaCaretRight } from 'react-icons/fa';

const Categories = ({ articles, title }) => {
	return (
		<div>
			<div className={articleStyles.sectionTitle}>
				<h5
					data-testid='categorie-title'
					className={`border-start px-3 border-success border-5 ${heroStyles.title}`}>
					{title}
				</h5>
				<Link href='/categories/[name]' as={`/categories/${title}`} passHref>
					<a data-testid='link-categorie'>
						Voir Plus <FaCaretRight />
					</a>
				</Link>
			</div>
			<div className={`row  ${articleStyles.category}`}>
				{articles.map((article) => (
					<ArticleCard
						key={article.id}
						article={article}
						size={3}
						imageHeight={200}
						imageWidth={300}
					/>
				))}
			</div>
		</div>
	);
};

export default Categories;
