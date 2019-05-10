class Product {
  constructor (id, name, desc, unitPrice, inventory) {
    this.id = id
    this.name = name
    this.desc = desc
    this.unitPrice = unitPrice
    this.inventory = inventory
  }
}

let p1 = new Product('1', 'spring', 'spring in action', 112.3, 100)
let p2 = new Product('2', 'chicken', '鸡肉', 11, 444)
let p3 = new Product('3', 'pc', 'dell', 11211.3, 200)
let p4 = new Product('4', 'phone', 'p30', 5000, 1000)

const products = [
  p1, p2, p3, p4
]

export default {products, Product}
