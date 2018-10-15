function addTo(passed){
	function add(inner){
		return passed+inner;
	}
	return add;
}

var addFive = addTo(5);
console.dir(addFive);
console.log(addFive(3));