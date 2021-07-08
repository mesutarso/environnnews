import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import { render, screen } from '../test-utils';
import Footer from '../components/Footer';

describe('Footer', () => {
	test('should render the heading', () => {
		render(<Footer />);
		const titles = screen.getAllByRole('heading', { level: 6 });
		for (const title of titles) {
			expect(title).toBeInTheDocument();
		}
	});
	test('should render the link', () => {
		render(<Footer />);
		const links = screen.getByText(/\*/i);
		expect(links).toContain();
	});
});
