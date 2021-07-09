import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import { render, screen, fireEvent, cleanup } from '../test-utils';
import { Partner } from '../components/Partner';

let getByTestId;

beforeEach(() => {
	const component = render(
		<Partner image={'/assets/giz1.png'} alt={'logo de partner afd 1'} />
	);
	getByTestId = component.getByTestId;
});

afterEach(() => {
	cleanup();
});

describe('Partner test', () => {
	it('should show partner image', () => {
		const imagePartner = getByTestId('image-partner');
		expect(imagePartner.className).not.toBeNull();
		expect(imagePartner.src).not.toBeNull();
		expect(imagePartner.alt).not.toBeNull();
		expect(imagePartner.src).toContain('/assets/giz1.png');
		expect(imagePartner.alt).toContain('logo de partner afd 1');
	});
});
