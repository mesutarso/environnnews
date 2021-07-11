import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import { render, screen, fireEvent, cleanup } from '../test-utils';
import PartnerSection from '../components/Partner';

let getByTestId;

beforeEach(() => {
	const component = render(<PartnerSection />);
	getByTestId = component.getByTestId;
});

afterEach(() => {
	cleanup();
});

describe('Partner test', () => {
	it('should show partner section title', () => {
		const titleSection = getByTestId('section-partner-title');
		expect(titleSection.className).not.toBeNull();
		expect(titleSection.textContent).toBe('ILS NOUS FONT CONFIANCE');
	});
});
