//stauts user

let status = sessionStorage.getItem('status')
if(status == null){
  status = 'no connect'
}

const state = {
  status: status,
  products: [
    {
      id: 1,
      provider: "ZARA WOMAN",
      img: "http://lorempixel.com/400/200/fashion",
      description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim repellendus
          temporibus placeat commodi iste.`,
      price: "53 000 XAF",
      rate: 4.5,
      color: "pink",
    },
    {
      id: 2,
      provider: "Adidas",
      img: "http://lorempixel.com/400/200/sports",
      description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim repellendus
          temporibus placeat commodi iste.`,
      price: "12 000 XAF",
      rate: 3.5,
      color: "blue",
    },
    {
      id: 3,
      provider: "Nike",
      img: "http://lorempixel.com/400/200/sports",
      description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim repellendus
          temporibus placeat commodi iste.`,
      price: "10 000 XAF",
      rate: 2.0,
      color: "teal",
    },
    {
      id: 4,
      provider: "Topicrem",
      img: "http://lorempixel.com/400/200/food",
      description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim repellendus
          temporibus placeat commodi iste.`,
      price: "1200 XAF",
      rate: 4.0,
      color: "orange",
    },
  ],
};

const getters = {
  allProducts(state) {
    return state.products;
  },
  getStatus: (state) => {
    return state.status;
  },
  getProduct: (state) => (id) => {
    return state.products[id - 1];
  },
  getIdLastProduct(state) {
    return state.products.length;
  },
};

const mutations = {
  newProduct: (state, product) => state.products.unshift(product),
  removeProduct: (state, id) =>
    (state.products = state.products.filter((product) => product.id !== id)),
  setProducts: (state, products) => (state.products = products),
  updateProduct: (state, upProduct) => {
    const index = state.products.findIndex(
      (product) => product.id === upProduct.id
    );
    if (index !== -1) {
      state.products.splice(index, 1, upProduct);
    }
  },
  setStatus: (state, val) => {
    sessionStorage.setItem('status', 'connect')
    state.status = val;
  },
};

export default {
  state,
  getters,
  mutations,
};
