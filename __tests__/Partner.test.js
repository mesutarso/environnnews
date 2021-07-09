import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import { render, screen, fireEvent, cleanup } from '../test-utils';
import PartnerSection from '../components/sect';
import { title } from 'process';

let getByTestId;
const partner = [
	{
		id: 1,
		image: '/assets/afd1.png',
		alt: 'logo de partner afd 1',
	},
];
beforeEach(() => {
	const component = render(<PartnerSection partner={parter} />);
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
		expect(titleSection.className).not.toBeNull();
	});
	it('should show partner image', () => {
		const imagePartner = getByTestId('image-partner');
		expect(imagePartner.className).not.toBeNull();
		expect(imagePartner.src).not.toBeNull();
		expect(imagePartner.alt).not.toBeNull();
		expect(imagePartner.src).toContain('/assets/afd1.png');
		expect(imagePartner.alt).toContain('logo de partner afd 1');
	});
});
