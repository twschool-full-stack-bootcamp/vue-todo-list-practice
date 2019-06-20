import Vue from 'vue';
import Vuex from 'vuex';
import Main from '../containers/Main';
import VueRouter from 'vue-router';

Vue.use(Vuex);

const routes = [
    { path: '/', component: Main },
];

export default new VueRouter({
    routes,
});