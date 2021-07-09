import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import { render, screen, fireEvent, cleanup } from '../test-utils';
import Footer from '../components/Footer';

let getByTestId;
beforeEach(() => {
	const component = render(<Footer />);
	getByTestId = component.getByTestId;
});

afterEach(() => {
	cleanup();
});
describe('Footer', () => {
	it('should render the heading', () => {
		render(<Footer />);
		const titles = screen.getAllByRole('heading', { level: 6 });
		for (const title of titles) {
			expect(title).toBeInTheDocument();
		}
	});

	it('should show a logo', () => {
		const logoEl = getByTestId('logo-environews');
		expect(logoEl.className).not.toBeNull();
		expect(logoEl.src).toContain('/assets/environews_logo.png');
		expect(logoEl.alt).toContain('logo d\'environ news');
	});
});
