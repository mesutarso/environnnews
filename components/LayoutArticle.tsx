import React from 'react';
import { ArticleCard } from './Articles';
import PubliciteStyle from '../styles/Publicite.module.css';

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
			{col2 ? (
				<div className='container'>
					<div className='row'>
						<div className={`col-md-${col1}`}>
							<div className='row'>
								{articles.map((article) => (
									<ArticleCard
										data-testid='layout-article'
										key={article.id}
										article={article}
										size={articleCardSize}
										imageHeight={250}
										imageWidth={380}
									/>
								))}
							</div>
						</div>
						<div className={`col-md-${col2} mt-1`}>
							{col1 == 12 ? (
								<div className={PubliciteStyle.squeleton_hr}></div>
							) : (
								<div className={PubliciteStyle.squeleton}></div>
							)}
						</div>
					</div>
				</div>
			) : (
				<div className='container'>
					<div className='row'>
						<div className={`col-md-${col1}`}>
							<div className='row justify-content-center mb-3'>
								{articles.map((article) => (
									<ArticleCard
										key={article.id}
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
			)}
		</>
	);
};

export default LayoutArticle;
