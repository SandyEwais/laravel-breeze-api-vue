import {createRouter, createWebHistory} from 'vue-router'
import DefaultLayout from '../components/DefaultLayout.vue'
import AuthLayout from '../components/AuthLayout.vue'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
const routes = [
    {
        path: '/',
        component: DefaultLayout,
        redirect: '/home',
        children: [
            {
                path: '/home',
                name: 'Home',
                component: Home
            },
        ]
    },
    {
        path: '/auth',
        component: AuthLayout,
        children: [
            {
                path: '/login',
                name: 'Login',
                component: Login
            },
            {
                path: '/register',
                name: 'Register',
                component: Register
            },
        ]
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes, 
})
export default router