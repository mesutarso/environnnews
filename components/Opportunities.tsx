import React from 'react';
import { IOpportunities } from '../pages';
import { FaCaretRight } from 'react-icons/fa';
import Link from 'next/link';

import heroStyles from '../styles/Hero.module.css';

const Opportunities: React.FC<IOpportunities> = ({ opportunities }) => {
	const filteredOpportunities = opportunities.filter((item, key) => key < 7);
	return (
		<div className={`border px-3 ${heroStyles.opportunities}`}>
			<h5 data-testid='title' className={`text-success ${heroStyles.title}`}>
				OPPORTUNITES <FaCaretRight />
			</h5>
			{filteredOpportunities.map((opportunity, key) => (
				<div
					key={key}
					className={`${heroStyles.opportunities_body} ${heroStyles.dashed_border}`}>
					<Link
						href='/[annee]/[mois]/[jour]/[slug]'
						as={`${opportunity.node.uri}`}
						passHref>
						<a>
							<p data-testid='description'>
								{opportunity.node.title.split(':').length == 2
									? opportunity.node.title.split(':')[1]
									: opportunity.node.title.split(':')[0]}
							</p>
						</a>
					</Link>
				</div>
			))}
		</div>
	);
};

export default Opportunities;
