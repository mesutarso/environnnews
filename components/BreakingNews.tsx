import React from 'react';
import { IState as IProps } from '../pages';

import heroStyles from '../styles/Hero.module.css';

const BreakingNews: React.FC<IProps> = ({ breakingNews }) => {
	const renderBreakingNews = (): JSX.Element[] => {
		return breakingNews.map((news) => {
			return (
				<div key={news.id}>
					<div className={heroStyles.breaking_news}>
						<h6 className={heroStyles.breaking_news__title}>{news.title}</h6>
						<p className={heroStyles.breaking_news__description}>
							{news.description}
						</p>
					</div>
				</div>
			);
		});
	};

	return (
		<div>
			<h5
				data-testid='title-breaking-news'
				className={`border-start px-3 border-success border-5 ${heroStyles.title}`}>
				BREAKING NEWS
			</h5>
			{renderBreakingNews()}
		</div>
	);
};

export default BreakingNews;
