import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import { render, screen, fireEvent, cleanup } from '../test-utils';
import Header, { SearchBar } from '../components/Header';

let getByTestId, getByPlaceholderText;

beforeEach(() => {
	const component = render(<Header />);
	const componentInput = render(<SearchBar />);
	getByTestId = component.getByTestId;
	getByPlaceholderText = componentInput.getByPlaceholderText;
});

afterEach(() => {
	cleanup();
});
describe('should render component header', () => {
	it('should render input search', () => {
		const inputTest = getByPlaceholderText('Rechercher un article');
		expect(inputTest).not.toBeNull();
	});
});
