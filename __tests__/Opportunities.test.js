import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import { render, screen, fireEvent, cleanup } from '../test-utils';
import Opportunities from '../components/Opportunities';

let getByTestId;
const oportunities = [
	{
		id: '1',
		description: "Bourse d'Etude aux USA",
	},
];
beforeEach(() => {
	const component = render(<Opportunities opportunities={oportunities} />);
	getByTestId = component.getByTestId;
});

afterEach(() => {
	cleanup();
});

describe('Opportunities test', () => {
	it('should show opportunities', () => {
		const title = getByTestId('title');
		const description = getByTestId('description');
		expect(title).not.toBeNull();
		expect(title.textContent).toBe('OPPORTUNITES');
		expect(description).not.toBeNull();
		expect(description.textContent).toBe(oportunities[0].description);
	});
});
