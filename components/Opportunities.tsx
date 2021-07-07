import React from 'react';
import { IOpportunities } from '../pages';

import heroStyles from '../styles/Hero.module.css';

const Opportunities: React.FC<IOpportunities> = ({ opportunities }) => {
	return (
		<div className={heroStyles.opportunities}>
			<h5
				className={`border-start px-3 border-success border-5 ${heroStyles.title}`}>
				OPPORTUNITES
			</h5>
			{opportunities.map((opportunity) => (
				<div key={opportunity.id} className={heroStyles.opportunities_body}>
					<p>{opportunity.description}</p>
				</div>
			))}
		</div>
	);
};

export default Opportunities;
