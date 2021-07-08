import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import { render, screen } from '../test-utils';
import Footer from '../components/Footer';

describe('Footer', () => {
	test('should render the heading', () => {
		const { getByRole } = render(
			<Footer>
				<div id='footer'></div>
			</Footer>
		);
		const heading = getByRole('heading', { level: 5 });
		expect(heading).toBeInTheDocument();
	});
});
