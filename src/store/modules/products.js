import axios from "axios";

const state = {
  listproducts: [],
  productosEliminados: [],
};
const mutations = {
    createListProducts(state, lista) {
        state.listproducts = lista;
        console.log(this.state.products.listproducts);
      },
    deleteCardProduct(state, id) {
        try {
            axios.delete(`https://api.escuelajs.co/api/v1/products/${id}`).then(res => console.log(res));
            console.log(state)
        } catch (error) {
            console.log(error);
        }
    },
    editCardProduct(state, product) {
        try {
            axios.put(`https://api.escuelajs.co/api/v1/products/${product.id}`, product).then(res => console.log(res));
            console.log(state)
        } catch (error) {
            console.log(error);
        }
    },
    createNewProduct(state, newProduct) {
        try {
            axios.post(`https://api.escuelajs.co/api/v1/products/`, newProduct).then(res => console.log(res));
            console.log(state)
        } catch (error) {
            console.log(error);
        }
    }
}

    const actions = {
    async getListProducts({ commit }) {
        try {
            const listado = await axios.get("https://api.escuelajs.co/api/v1/products/").then(res => res.data);
            commit("createListProducts", listado);
        } catch (error) {
            console.log(error);
        }
    },
};
const getters = {};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
};
