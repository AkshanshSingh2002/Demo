import sum from "./sum.js";

describe("Summ function", () => {
	test("adds 2 + 2 equal to 4", () => {
		expect(sum(2, 2)).toBe(4);
	});

	test("adds -5 + -5 equal to -10", () => {
		expect(sum(-5, -5)).toBe(-10);
	});
});
