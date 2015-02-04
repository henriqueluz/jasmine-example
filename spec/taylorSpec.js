describe("Taylor series", function() {

	beforeEach(function() {
	    taylorSeries = new TaylorSeries();
	 });
	
	it("should return zero for negative series", function() {
		expect(taylorSeries.find(-1)).toEqual(0);
	});
	
	it("should return zero for zero series", function() {
		expect(taylorSeries.find(0)).toEqual(0);
	});
	
	it("should return taylor series for one", function() {
		expect(taylorSeries.find(1)).toEqual(1);
	});
	
	it("should return taylor series for two", function() {
		expect(taylorSeries.find(2)).toEqual(2);
	});
	
	it("should return taylor series for three", function() {
		expect(taylorSeries.find(3)).toEqual(2.5);
	});
	
	it("should return taylor series for four", function() {
		expect(taylorSeries.find(4)).toEqual(2.6666666666666665);
	});
	
});

