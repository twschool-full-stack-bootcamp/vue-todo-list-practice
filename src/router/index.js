import Vue from 'vue';
import VueRouter from 'vue-router';
import TodoListContainer from '../containers/TodoListContainer';
import Main from '../containers/Main';
import Personal from '../containers/Personal';
import Home from '../containers/Home';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Main },
    { 
        path: '/home',
        name: 'home',
        component: Home,
        redirect: to => ({ name: 'todo-list', params: to.params }),
        props: true,
        children: [
            { path: 'todo-list', name: 'todo-list', component: TodoListContainer, props: true },
            { path: 'personal', name: 'personal', component: Personal , props: true},
        ],
     },
];

export default new VueRouter({
    routes,
});