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
			expect(title.textContent).not.toBeNull();
		}
	});

	it('should show a logo', () => {
		const logoEl = getByTestId('logo-environews');
		expect(logoEl.className).not.toBeNull();
		expect(logoEl.src).not.toBeNull();
		expect(logoEl.alt).not.toBeNull();
		expect(logoEl.src).toContain('/assets/environews_logo.png');
		expect(logoEl.alt).toContain("logo d'environ news");
	});
	it('tests if the links have valid href', () => {
		const linkFaceBookEl = getByTestId('link-facebook');
		const linkTwiterEl = getByTestId('link-twiter');
		const linkLinkedinInEl = getByTestId('link-linkedinIn');
		const linkInstagramEl = getByTestId('link-Instagram');
		const linkYoutubeEl = getByTestId('link-youtube');
		const copyrigthEl = getByTestId('copyrigth');

		expect(linkFaceBookEl.textContent).not.toBeNull();
		expect(linkFaceBookEl.href).toBe(
			'https://web.facebook.com/EnvironewsRDC/?_rdc=1&_rdr'
		);

		expect(linkTwiterEl.textContent).not.toBeNull();
		expect(linkTwiterEl.href).toBe(
			'https://twitter.com/environews_rdc?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'
		);

		expect(linkLinkedinInEl.textContent).not.toBeNull();
		expect(linkLinkedinInEl.href).toBe(
			'https://www.linkedin.com/company/environews-rdc/'
		);

		expect(linkInstagramEl.textContent).not.toBeNull();
		expect(linkInstagramEl.href).toBe(
			'https://www.instagram.com/environewsrdc1/'
		);

		expect(linkYoutubeEl.textContent).not.toBeNull();
		expect(linkYoutubeEl.href).toBe(
			'https://www.youtube.com/c/environnementrdc/featured'
		);
		expect(copyrigthEl.textContent).not.toBeNull();
	});
});
