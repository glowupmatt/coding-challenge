module.exports.run = function(a, b, c) {
/*
Given 3 int values, a b c, return their sum. However, if one of the values is the same as another of the values, it does not count towards the sum.

Examples:
	function(1, 2, 3) => 6
	function(3, 2, 3) => 2
	function(3, 3, 3) => 0

Write your code below the comment.

*/
	//we want to grab all the values dynamically 
	const values = [...arguments]
	//create a way to keep track of the count for each number
	const count = new Map();
	//loop through the values
	for (let num of values) {
		//we add one to each of the numbers whenever we see it
		count.set(num, (count.get(num) || 0) + 1)
	}

	//we can use a reduce method to do the sum easily
	return values.reduce((prev, curr) => {
		//check if the value equals 1
		//this means we only have seen it once 
		//then we add it to the prev value
		if (count.get(curr) === 1) {
			return prev += curr
		} else {
			//check if the count has a value more than one
			//this means that the number has been passed in more than once and we skip it
			return prev
		}
	}, 0)
};
