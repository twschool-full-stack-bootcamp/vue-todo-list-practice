import Vue from 'vue';
import Vuex from 'vuex';
import { ALL_TAB, UNDO_TAB, DONE_TAB, UNDO, DONE } from '../constant';
import Respository from '../respository';

Vue.use(Vuex);
const respository = new Respository();

export default new Vuex.Store({
    state: {
        tasks: respository.filterByStatus(),
        tabType: ALL_TAB, 
    },
    getters: {
        filterTask(state) {
            if (state.tabType === DONE_TAB) {
                return respository.filterByStatus(DONE); 
            } else if (state.tabType === UNDO_TAB) {
                return respository.filterByStatus(UNDO); 
            }
            return respository.filterByStatus();
        }
    },
    actions: {
        fetchAllTask({ commit }) {
            respository.fetchAllTasks(() => {
                commit('addTaskList', respository.filterByStatus());
            });    
        }
    },
    mutations: {
        addNewTask(state, payload) {
            respository.addNewTask(payload);
        },
        updateTask(state, payload) {
            respository.updateTask(payload);
        },
        addTaskList(state, payload) {
            state.tasks.push(...payload);
        },
        updateTabType(state, payload) {
            state.tabType = payload;
        }
    }
});