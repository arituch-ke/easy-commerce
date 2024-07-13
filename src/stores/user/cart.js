import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [],
    checkout: {},
  }),
  getters: {
    summaryQuantity(state) {
      return state.items.reduce((acc, item) => acc + item.quantity, 0);
    },
    summaryPrice(state) {
      return state.items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
    },
  },
  actions: {
    loadCart() {
      const previousCart = localStorage.getItem("cart-data");
      if (previousCart) {
        this.items = JSON.parse(previousCart);
      }
    },
    loadCheckout() {
      const previousOrder = localStorage.getItem("order-data");
      if (previousOrder) {
        this.checkout = JSON.parse(previousOrder);
      }
    },
    createOrder(user) {
      const order = {
        ...user,
        totalPrice: this.summaryPrice,
        paymentMethod: "Credit Card",
        createdDate: new Date().toLocaleString(),
        orderNumber: `AA${Math.floor(Math.random() * 90000 + 10000)}`,
        products: this.items,
      };
      localStorage.setItem("order-data", JSON.stringify(order));
    },
    addToCart(product) {
      const findProductIndex = this.items.findIndex(
        (item) => item.name === product.name
      );

      if (findProductIndex < 0) {
        product.quantity = 1;
        this.items.push(product);
      } else {
        const currentItem = this.items[findProductIndex];
        this.updateQuantity(findProductIndex, currentItem.quantity + 1);
      }

      localStorage.setItem("cart-data", JSON.stringify(this.items));
    },
    updateQuantity(index, quantity) {
      this.items[index].quantity = +quantity;
      localStorage.setItem("cart-data", JSON.stringify(this.items));
    },
    removeItemInCart(index) {
      this.items.splice(index, 1);
      localStorage.setItem("cart-data", JSON.stringify(this.items));
    },
  },
});
