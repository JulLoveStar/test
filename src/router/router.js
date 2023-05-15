import { createRouter, createWebHistory } from "vue-router"
import Main from "../pages/Main"
import Login from "../pages/Login"


const routes =[
    {
        path:'/',
        component: Main
    },
    {
        path:'/login',
        component: Login
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router