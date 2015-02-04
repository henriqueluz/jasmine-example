function Factorial() {
	
}

Factorial.prototype.calculate = function(n) {
	if(n < 0) {
		return undefined;
	} else {
		if(n === 0 || n === 1) {
			return 1;
		}
	}
	return n*arguments.callee(n-1);
};