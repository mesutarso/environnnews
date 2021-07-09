import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import { render, screen, fireEvent, cleanup } from '../test-utils';
import Comment from '../components/Comment';

let getByTestId;
const comments = [
	{
		id: '1',
		pseudo: ' Beni Mapunina',
		description: 'This is what you want I guess',
		date: '24th july 2012',
	},
];
beforeEach(() => {
	const component = render(<Comment comments={comments} />);
	getByTestId = component.getByTestId;
});

afterEach(() => {
	cleanup();
});

describe('Comment', () => {
	it('should show a logo', () => {
		const pseudo = getByTestId('pseudo');
		const description = getByTestId('description');
		const commentDate = getByTestId('comment-date');

		expect(pseudo).not.toBeNull();
		expect(description).not.toBeNull();
		expect(commentDate).not.toBeNull();

		expect(pseudo.textContent).toBe(comments[0].pseudo);
		expect(description.textContent).toBe(comments[0].description);
		expect(commentDate.textContent).toBe(comments[0].date);
	});
});
