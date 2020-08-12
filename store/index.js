
// https://nuxtjs.org/guide/vuex-store/#activate-the-store

export const state = () => ({
    data: "whatever"
})

export const mutations = {
    change(state){
        state.data = "something else";
    }
}