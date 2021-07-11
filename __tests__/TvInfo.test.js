import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import { render, screen, fireEvent, cleanup } from '../test-utils';
import TvInfo from '../components/TvInfo';

let getByTestId;
const title = 'title';
const descriptionn = 'description';
const phoneNumberr = 'Tél : 0823512934';
beforeEach(() => {
	const component = render(
		<TvInfo
			title={title}
			description={descriptionn}
			phoneNumber={phoneNumberr}
		/>
	);
	getByTestId = component.getByTestId;
});

afterEach(() => {
	cleanup();
});

describe('Tv Information test', () => {
	it('should show the title', () => {
		const titleEl = getByTestId('title');
		expect(titleEl).not.toBeNull();
		expect(titleEl.textContent).toBe(title);
	});
	it('should show the description', () => {
		const description = getByTestId('description');
		expect(description).not.toBeNull();
		expect(description.textContent).toContain(descriptionn);
	});
	it('should show the phone number', () => {
		const phoneNumber = getByTestId('phone-number');
		expect(phoneNumber).not.toBeNull();
		expect(phoneNumber.textContent).toContain(phoneNumberr);
	});
});
