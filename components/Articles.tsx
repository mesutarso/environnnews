import Image from 'next/image';
import { IArticles } from '../pages';

const Articles: React.FC<IArticles> = ({ articles }) => {
	return (
		<div className='row d-flex justify-content-center'>
			{articles.map((article) => (
				<div key={article.id} className='col-md-6 col-12'>
					<Image
						src={article.image}
						alt={article.description}
						width={400}
						height={300}
					/>
					<h5>{article.category}</h5>
					<p>{article.description}</p>
					<span>{article.author}s</span>
				</div>
			))}
		</div>
	);
};

export default Articles;
