import React from 'react';
import { ArticleCard } from './Articles';
// import PubliciteStyle from '../styles/Publicite.module.css';

export interface LayoutProps {
	col1: number;
	col2?: number;
	articles: any;
	articleCardSize: number;
}

const LayoutArticle: React.FC<LayoutProps> = ({
	col1,
	col2,
	articles,
	articleCardSize,
}) => {
	return (
		<>
			<div className='container'>
				<div className='row'>
					<div className={`col-md-${col1}`}>
						<div className='row justify-content-center mb-3'>
							{articles.map((article, key) => (
								<ArticleCard
									key={key}
									article={article}
									size={articleCardSize}
									imageHeight={250}
									imageWidth={380}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default LayoutArticle;
