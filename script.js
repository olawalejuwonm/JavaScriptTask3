function divisible(number) {
var mmi = []

//of Array(2).keys()

// const number = 10;
const numberArray = []
for (let i = 1; i <= number; i++) {
	numberArray.push(i)
}
numberArray.forEach(geett)
function geett(x, a) {
	if ((x%2 == 0) || (x%3 == 0) || (x%5 == 0)) {
		// const xd23 = ((x%2 == 0) && (x%3 == 0))
		if (((x%2 == 0) && (x%3 == 0)) && (x%5 == 0)) {
			mmi.push("yu-gi-oh")
		}
		else if ((x%2 == 0) && (x%3 == 0)) {
			mmi.push("yu-gi")
			// console.log(x)
		}
		else if ((x%2 == 0) && (x%5 == 0)) {
			mmi.push("yu-oh")
			// console.log(x)
		}
		else if (x%2 == 0) {
			mmi.push("yu")
			// console.log(x)
		}
		else if (x%3 == 0) {
			mmi.push("gi")
			// console.log(x)
		}
		else if (x%5 == 0) {
			mmi.push("oh")
			// console.log(x)
		}


		// mmi.push(x)
		

	}
	else {
		mmi.push(x)
	}

}
	
return mmi	
}
divisible(100)
divisible(30)
console.log(divisible(100))
console.log(divisible(30))
console.log(divisible(10))

// console.log(mmi)
// var b = Array(10)
// console.log(b)
// function range(size, startAt = 0) {
// 	return [Array(size).keys()].map(i => i + startAt)
// }
// console.log(range(10))
// var aa = (2%2 == 0) && (4%2 == 0) 
// console.log(aa)