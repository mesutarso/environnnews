import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import { render, screen } from '../test-utils';
import Card from '../components/Card';

describe('Card test', () => {
	test('should render the mouse click', () => {
		render(<Card />);
		const links = screen.getAllByText(/[a-z]*/g);
		for (const link of links) {
			expect(link).toBeInTheDocument();
		}
	});
});
