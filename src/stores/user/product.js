import { defineStore } from "pinia";

export const useProductStore = defineStore("product", {
  state: () => ({
    list: [
      {
        name: "test",
        imageUrl:
          "https://fastly.picsum.photos/id/458/200/200.jpg?hmac=TMJKh7xYKczm-J8McTjX4hBnhjgraDPgaJFkINMU01Y",
        quantity: 10,
        about: "test",
        status: "open",
        price: 100,
      },
      {
        name: "test2",
        imageUrl:
          "https://fastly.picsum.photos/id/458/200/200.jpg?hmac=TMJKh7xYKczm-J8McTjX4hBnhjgraDPgaJFkINMU01Y",
        quantity: 2,
        about: "test2",
        status: "open",
        price: 200,
      },
    ],
  }),
  actions: {
    filterProducts(search) {
      return this.list.filter((product) => product.name.includes(search));
    },
  },
});
