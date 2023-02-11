import { defineStore } from 'pinia'
import axios from 'axios';
export const useAuthStore = defineStore("auth",{
    state: () => ({
        authUser: null
    }),
    getters: {
        user: (state) => state.authUser
    },
    actions: {
        async getCsrfToken() {
            await axios.get('/sanctum/csrf-cookie')
        },
        async getAuthUser() {
            await this.getCsrfToken()
            const data = await axios.get('/api/user')
            this.authUser = data.data
        },
        async handleLogin(email, password) {
            await this.getCsrfToken()
            await axios.post('/login',{
                email: email,
                password: password
            })
            this.router.push('/home')
        },
        async handleRegister(name, email, password, password_confirmation) {
            await this.getCsrfToken()
            await axios.post('/register',{
            name: name,
            email: email,
            password: password,
            password_confirmation: password_confirmation
            })
            this.router.push('/home')
        },
        // handelLogout(){
        //     console.log('logout');
        //     // await axios.post('/logout')
        //     // this.router.push('/login')
        // }
    }
})