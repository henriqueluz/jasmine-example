describe("Factorial function", function() {

	beforeEach(function() {
	    factorial = new Factorial();
	 });
	
	it("should calculate 1!", function() {
		expect(factorial.calculate(1)).toEqual(1);
	});
	
	it("should calculate 2!", function() {
		expect(factorial.calculate(2)).toEqual(2);
	});
	
	it("should calculate 3!", function() {
		expect(factorial.calculate(3)).toEqual(6);
	});
	
	it("should calculate 5!", function() {
		expect(factorial.calculate(5)).toEqual(120);
	});
	
	it("should calculate 10!", function() {
		expect(factorial.calculate(10)).toEqual(3628800);
	});
	
	it("should return undefined for negative numbers!", function() {
		expect(factorial.calculate(-1)).toBeUndefined();
	});
});