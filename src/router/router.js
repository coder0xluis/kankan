import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("../views/Index"),
    },
    {
        path: "/book-list",
        name: "book-list",
        component: () => import("../views/BookList")
    },
    {
        path: "/article",
        name: "article",
        component: () => import("../views/ArticleContent"),
    },
    {
        path: "/category",
        name: "category",
        component: () => import("../views/Category"),
    },
    {
        path: "*",
        name: "404",
        component: () => import("../views/404"),
    }
];

export default new Router({
    // mode: "history",
    routes
});