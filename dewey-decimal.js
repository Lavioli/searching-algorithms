//Imagine you are looking for a book in a library with a Dewey Decimal index. How would you go about it? Can you express this process as a searching algorithm?

var books = [
		{
			title: 'Rich Dad Poor Dad',
			author:'Robert Kiyosaki',
			decimalIndex: 300.11
		},
		
		{
			title: 'The 4-Hour Workweek',
			author:'Tim Ferris',
			decimalIndex: 301.12
		},
		
		{
			title: 'Scar Tissue',
			author:'Anthony Kiedis',
			decimalIndex: 500.68
		}
	]

//input: dewey decimail 500.68

/*output: {
			title: 'Scar Tissue',
			author:'Anthony Kiedis',
			decimalIndex: 500.68
			}
*/


function findBook(decimalIndex) {
	//loop through the array
		//if book[i].decimalIndex has the same decimalIndex value
			//THEN return the book at that index
	for (var i = 0; i < books.length; i++) {
		if(books[i].decimalIndex === decimalIndex) {
			return books[i];
		}
	}
}

findBook(500.68);