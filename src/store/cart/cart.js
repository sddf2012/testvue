class CartProduct {
  constructor (product, buyNum) {
    this.id = product.id
    this.name = product.name
    this.desc = product.desc
    this.unitPrice = product.unitPrice
    this.buyNum = buyNum
    this.buyPrice = this.unitPrice * buyNum
  }
}

const cart = {
  state: {
    cartProducts: [],
    totalNum: 0,
    totalPrice: 0
  },
  mutations: {
    pushProduct (state, payload) {
      let product = payload.product
      let buyNum = payload.buyNum
      let buyPrice = payload.buyNum * product.unitPrice
      let current = state.cartProducts.find(p => p.id === product.id)
      if (current) {
        current.buyNum = current.buyNum + buyNum
        current.buyPrice = current.buyPrice + buyPrice
      } else {
        state.cartProducts.push(new CartProduct(product, buyNum))
      }
      state.totalNum = state.totalNum + buyNum
      state.totalPrice = state.totalPrice + buyPrice
    },
    removeProduct (state, product) {
      let index = state.cartProducts.findIndex(p => p.id === product.id)
      if (index > -1) {
        let current = state.cartProducts.splice(index, 1)
        state.totalNum = state.totalNum - current.buyNum
        state.totalPrice = state.totalPrice - current.buyPrice
      }
    }
  }
}

export default cart
