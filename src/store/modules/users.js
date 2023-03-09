import axios from "axios";


const state = {
    usersProfile: [],
};
const mutations = {
    createUsersProfile(state, profile) {
        state.usersProfile = profile;
        console.log(this.state.products.usersProfile);
    },
};
const actions = {
    async getUsersProfile({ commit }) {
        try {
            const perfil = await axios.get("https://api.escuelajs.co/api/v1/users").then(res => res.data);
            commit("createUsersProfile", perfil);
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
