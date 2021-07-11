import React from 'react';
import { IOpportunities } from '../pages';
import { FaCaretRight } from 'react-icons/fa';

import heroStyles from '../styles/Hero.module.css';

const Opportunities: React.FC<IOpportunities> = ({ opportunities }) => {
	return (
		<div className={`border px-3 ${heroStyles.opportunities}`}>
			<h5 data-testid='title' className={`text-success ${heroStyles.title}`}>
				OPPORTUNITES <FaCaretRight />
			</h5>
			{opportunities.map((opportunity) => (
				<div
					key={opportunity.id}
					className={`${heroStyles.opportunities_body} ${heroStyles.dashed_border}`}>
					<p data-testid='description'>{opportunity.description}</p>
				</div>
			))}
		</div>
	);
};

export default Opportunities;
