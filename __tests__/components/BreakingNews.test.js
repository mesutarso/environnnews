import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import { render, screen, fireEvent, cleanup } from '../test-utils';
import BreakingNews from '../components/BreakingNews';
import { title } from 'process';

let getByTestId;
const News = [
	{
		id: '1',
		title: 'Covid en Rdc',
		description: 'Corona virus is a virus, okay!',
	},
];
beforeEach(() => {
	const component = render(<BreakingNews breakingNews={News} />);
	getByTestId = component.getByTestId;
});

afterEach(() => {
	cleanup();
});

describe('BreakingNews test', () => {
	it('should show title and description', () => {
		const title = getByTestId('title');
		const description = getByTestId('description');

		expect(title).not.toBeNull();
		expect(description).not.toBeNull();
		expect(title.textContent).toBe(News[0].title);
		expect(description.textContent).toBe(News[0].description);
	});
});
