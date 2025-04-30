module.exports.run = function(csv){
/*
	A stringified CSV file will be passed into this function.
	Parse the string so it is an array of objects and return the array.
	The object properties are the header of the csv file, and the very first row of the csv file are the headers.

	Example

	function ('FirstName,LastName,Age\nDan,Tran,29\nDon,Tran,25\nJasmine,Tran,13') =>
		[
			{FirstName: Dan, LastName: Tran, Age: 29},
			{FirstName: Don, LastName: Tran, Age: 25},
			{FirstName: Jasmine, LastName: Tran, Age: 13},
		]

	Write your code below the comment.
*/
	
	//Need to split the keys and the values from each other
	//each value is split from \n so I can grab the first value in the split array to make rows
	//will look like FirstName,LastName,Age and split from the comma to be in an array
	//then i can create a new array from the actual data names and ages ect...
	//i need two loops kinda following a matrix like data structure
	//create an object and loop through the data to add into the res array
	const rows = csv.split("\n")
	const headers = rows[0].split(",")
	const data = rows.slice(1).map((str) => {
		return str.split(",")
	})
	const res = []
	for (let i = 0; i < data.length; i++){
		let obj = {}
		for (let j = 0; j < data[i].length; j++){
			const header = headers[j]
				obj[header] = data[i][j]
		}
		res.push(obj)
	}
	return res

};
