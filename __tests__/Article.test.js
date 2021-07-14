import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import { render, screen, fireEvent, cleanup } from '../test-utils';
import Articles from '../components/Articles';

let getByTestId;
const articles = [
	{
		id: '1',
		image: '/assets/bird.jpg',
		category: 'climat',
		description:
			'Corrupti explicabo voluptates soluta asperiores? Tenetur magni molestias exercitationem alias, dignissimos quos earum recusandae?',
		author: 'Emmanuedescriptionlla Mulanga',
	},
];

beforeEach(() => {
	const component = render(<Articles articles={articles} />);
	getByTestId = component.getByTestId;
});

afterEach(() => {
	cleanup();
});
describe('should render component Article test', () => {
	it('should show Article ', () => {
		const articleDescription = getByTestId('article-description');
		const articleTitle = getByTestId('article-title');

		expect(articleDescription.textContent).toBe(articles[0].description);
		expect(articleTitle.textContent).toBe(articles[0].category);
	});
	it('should show Article link ', () => {
		const articleLink = getByTestId('article-link');
		expect(articleLink.textContent).not.toBeNull();
		expect(articleLink.href).not.toBeNull();
	});
	it('should show Article image ', () => {
		const { getAllByAltText } = render(<Articles articles={articles} />);
		const altImages = getAllByAltText(articles[0].description);
		for (const altImage of altImages) {
			expect(altImage).toBeInTheDocument();
			expect(altImage).not.toBeNull();
		}
	});
});
