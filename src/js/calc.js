export class Math {
	static add(a, b) {
		return parseInt(a) + parseInt(b);
	}
	static div(a, b) {
		if (a == 0 && b == 0) {
			return undefined;
		} else if (b == 0) {
			return Infinity;
		} else {
			return parseInt(a) / parseInt(b);
		}
	}
	static sub(a, b) {
		return parseInt(a) - parseInt(b);
	}
	static mul(a, b) {
		return parseInt(a) * parseInt(b);
	}
}
