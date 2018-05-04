const Math = require('../src/js/calc').Math;

describe('Calculator', () => {
	let a, b;

	beforeEach(() => {
		a = 5;
		b = 2;
	});

	it('should add correctly', () => {
		expect(Math.add(a, b)).toBe(a + b);
	});

	it('should sub correctly', () => {
		expect(Math.sub(a, b)).toBe(a - b);
	});

	it('should multiply correctly', () => {
		expect(Math.mul(a, b)).toBe(a * b);
	});

	it('should divide correctly', () => {
		expect(Math.div(a, b)).toBe(a / b);
	});

	it('should return infinity while divide by 0', () => {
		expect(Math.div(a, 0)).toBe(Infinity);
	});

	it('should return undefined when a and b are 0', () => {
		expect(Math.div(0, 0)).toBeUndefined();
	});
});
