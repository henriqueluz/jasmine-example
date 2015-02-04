function TaylorSeries() {
	
}

TaylorSeries.prototype.find = function(n) {
	var e = 1;
	var factorial = new Factorial();
	if(n <= 0) {
		return 0;
	} else {
		for(var i = 1; i < n; i++) {
			e = e + ( 1/factorial.calculate(i) );
		}
	}
	return e;
};