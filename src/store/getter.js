const getters = {
  doubleCount: state => state.test.count * 2,
  totalNum: state => state.cart.totalNum,
  totalPrice: state => state.cart.totalPrice,
  buyProducts: state => state.cart.cartProducts
}
export default getters
