//let count = 1
//const preIncrement = ++count
//console.log(`const: ${count}, preIncrement: ${preIncrement}`)

let count = 1
const preIncrement = count++
console.log(`const: ${count}, preIncrement: ${preIncrement}`)



function calculateAvg(price1, price2, price3) {
	const avg = (price1 + price2 + price3) / 3
	return avg
}

const priceA = 1000
const priceB = 2000
const priceC = 3000
const avg = calculateAvg(priceA, priceB, priceC)
console.log(`평균가격: ${avg}`)

const notebook1Name = 'Macbook'
const notebook1Price = 2000000
const notebook1Company = 'Apple'

class Notebook {
	constructor(name, price, company) {
		this.name = name
		this.price = price
		this.company = company
	}
}