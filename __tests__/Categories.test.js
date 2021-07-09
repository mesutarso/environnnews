import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import { render, screen, fireEvent, cleanup } from '../test-utils';
import Categories from '../components/Categories';
import { title } from 'process';

let getByTestId;
const articles = [
	{
		id: '1',
		image: '/assets/bird.jpg',
		category: 'climat',
		description:
			'Corrupti explicabo voluptates soluta asperiores? Tenetur magni molestias exercitationem alias, dignissimos quos earum recusandae?',
		author: 'Eminence',
	},
];
beforeEach(() => {
	const component = render(
		<Categories articles={articles} title={'Mon article'} />
	);
	getByTestId = component.getByTestId;
});

afterEach(() => {
	cleanup();
});

describe('Categories test', () => {
	it('should show categorie title', () => {
		const categorieTitleEl = getByTestId('categorie-title');
		expect(categorieTitleEl.className).not.toBeNull();
		expect(categorieTitleEl.textContent).not.toBeNull();
	});
	it('should test link categorie', () => {
		const linkCategorieEl = getByTestId('link-categorie');
		const link = '/categories/' + `${title}`;
		expect(linkCategorieEl.textContent).not.toBeNull();
		expect(linkCategorieEl.href).not.toBeNull();
	});
});
