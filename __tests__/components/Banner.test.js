import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import { render, screen, fireEvent, cleanup } from '../../test-utils';
import Banner from '../../components/Banner';

let getByTestId;

beforeEach(() => {
	const component = render(<Banner />);
	getByTestId = component.getByTestId;
});

afterEach(() => {
	cleanup();
});

describe('Banner test', () => {
	it('should render the heading', () => {
		render(<Banner />);
		const titles = screen.getAllByRole('heading', { level: 1 });
		for (const title of titles) {
			expect(title).toBeInTheDocument();
			expect(title.textContent).not.toBeNull();
		}
	});
	it('should show a banner image', () => {
		const imageBanner = getByTestId('img-banner');
		expect(imageBanner.className).not.toBeNull();
		expect(imageBanner.src).not.toBeNull();
		expect(imageBanner.alt).not.toBeNull();
	});
	it('should show a banner description', () => {
		const bannerDescription = getByTestId('banner-description');
		expect(bannerDescription.className).not.toBeNull();
	});
});
