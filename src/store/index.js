import { createStore } from 'vuex'

export default createStore({
	state: {
		products: [],
		cart: [],
		count: 0,
	},
	mutations: {
		SET_PRODUCTS_CART: (state, products) => {
			state.cart = products;
		},
		SET_PRODUCTS_TO_STATE: (state, products) => {
			state.products = products;
		},
		SET_CART: (state, product) => {
			state.cart.push(product);
		},
		SET_COUNT_TO_STATE(state, count) {
			state.count = count;
		}
	},
	actions: {
		SET_COUNT_PRODUCTS({ commit }, count) {
			commit('SET_COUNT_TO_STATE', count)
		},
		GET_MAIN_PAGE_PRODUCTS_API({ commit }) {
			fetch("http://localhost:3000/mainPageProducts", { mode: "cors" })
				.then((response) => {
					return response.json();
				})
				.then((products) => {
					commit('SET_PRODUCTS_TO_STATE', products);
					return products;
				})
				.catch((err) => {
					console.log(err);
					return err;
				});
		},
		GET_ALL_PRODUCTS_API({ commit }) {
			fetch("http://localhost:3000/allProducts", { mode: "cors" })
				.then((response) => {
					return response.json();
				})
				.then((products) => {
					commit('SET_PRODUCTS_TO_STATE', products);
					return products;
				})
				.catch((err) => {
					console.log(err);
					return err;
				});
		},
		GET_CART_PRODUCTS({ commit }) {
			fetch("http://localhost:3000/cart",)
				.then((response) => {
					return response.json();
				})
				.then((products) => {
					let count = 0;
					products.forEach(element => {
						return count += element.quantity;
					});
					commit('SET_PRODUCTS_CART', products);
					commit('SET_COUNT_TO_STATE', count)
					return products;
				})
				.catch((err) => {
					console.log(err);
					return err;
				})
		},
	},
	getters: {
		PRODUCTS(state) {
			return state.products;
		},
		CART(state) {
			return state.cart;
		},
		COUNT(state) {
			return state.count;
		}
	},
	modules: {
	}
})
