import { createStore } from 'vuex'

export default createStore({
	state: {
		products: [],
		cart: []
	},
	mutations: {
		SET_PRODUCTS_CART: (state, products) => {
			state.cart = products
		},
		SET_PRODUCTS_TO_STATE: (state, products) => {
			state.products = products;
		},
		SET_CART: (state, product) => {
			state.cart.push(product);
		}
	},
	actions: {
		GET_MAIN_PAGE_PRODUCTS_API({ commit }) {
			fetch("http://localhost:3000/mainPageProducts", { mode: "cors" })
				.then((response) => {
					return response.json();
				})
				.then((products) => {
					commit('SET_PRODUCTS_TO_STATE', products);
					console.log(products);
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
					console.log(products);
					return products;
				})
				.catch((err) => {
					console.log(err);
					return err;
				});
		},
		GET_CART_PRODUCTS({ commit }) {
			fetch("http://localhost:3000/cart", { mode: "cors" })
				.then((response) => {
					return response.json();
				})
				.then((products) => {
					commit('SET_PRODUCTS_CART', products);
					return products;
				})
				.catch((err) => {
					console.log(err);
					return err;
				})
		},
		ADD_PRODUCT_TO_CART({ commit }, product) {

			// fetch("http://localhost:3000/cart", {
			// 	method: "POST",
			// 	body: JSON.stringify(product),
			// 	headers: { 'Content-Type': 'application/json' }
			// })
			// 	.then(res => res.json())
			// 	.then(products => {
			// 		console.log(products);
			// 		commit('SET_CART', products);
			// 	})
			commit('SET_CART', product);
		}
	},
	getters: {
		PRODUCTS(state) {
			return state.products;
		},
		CART(state) {
			return state.cart;
		}
	},
	modules: {
	}
})
