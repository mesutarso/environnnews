import Link from 'next/link';
import { IArticles } from '../pages';
import { ArticleCard } from './Articles';
import articleStyles from '../styles/Article.module.css';
import heroStyles from '../styles/Hero.module.css';
import { FaCaretRight } from 'react-icons/fa';

const Categories = ({ articles, title }) => {
	const filteredArticles = articles.filter((item, key) => key < 4);
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
				{filteredArticles.map((articleItems, key) => (
					<ArticleCard
						key={key}
						article={articleItems}
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
