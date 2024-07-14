import { createRouter, createWebHistory } from "vue-router";
import UserLayout from "@/layouts/UserLayout.vue";
import AdminLayout from "@/layouts/AdminLayout.vue";
import AuthenticatedLayout from "@/layouts/AuthenticatedLayout.vue";

import HomeView from "@/views/user/HomeView.vue";
import CartView from "@/views/user/CartView.vue";
import CheckoutView from "@/views/user/CheckoutView.vue";
import ProfileView from "@/views/user/ProfileView.vue";
import SearchView from "@/views/user/SearchView.vue";
import SuccessView from "@/views/user/SuccessView.vue";

import AdminLoginView from "@/views/admin/LoginView.vue";
import AdminDashboardView from "@/views/admin/DashboardView.vue";
import AdminProductsListView from "@/views/admin/product/ListView.vue";
import AdminProductUpdateView from "@/views/admin/product/UpdateView.vue";
import AdminOrderListView from "@/views/admin/order/ListView.vue";
import AdminOrderDetailView from "@/views/admin/order/DetailView.vue";
import AdminUserListView from "@/views/admin/user/ListView.vue";
import AdminUserUpdateView from "@/views/admin/user/UpdateView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // user site
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: { layout: UserLayout },
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfileView,
      meta: { layout: UserLayout },
    },
    {
      path: "/search",
      name: "search",
      component: SearchView,
      meta: { layout: UserLayout },
    },
    {
      path: "/cart",
      name: "cart",
      component: CartView,
      meta: { layout: UserLayout },
    },
    {
      path: "/checkout",
      name: "checkout",
      component: CheckoutView,
      meta: { layout: UserLayout },
    },
    {
      path: "/success",
      name: "success",
      component: SuccessView,
      meta: { layout: UserLayout },
    },

    // admin site
    {
      path: "/admin/login",
      name: "admin-login",
      component: AdminLoginView,
      meta: { layout: AuthenticatedLayout },
    },
    {
      path: "/admin/dashboard",
      name: "admin-dashboard",
      component: AdminDashboardView,
      meta: { layout: AdminLayout },
    },
    {
      path: "/admin/products",
      name: "admin-product-list",
      component: AdminProductsListView,
      meta: { layout: AdminLayout },
    },
    {
      path: "/admin/products/create",
      name: "admin-product-create",
      component: AdminProductUpdateView,
      meta: { layout: AdminLayout },
    },
    {
      path: "/admin/products/update/:id",
      name: "admin-product-update",
      component: AdminProductUpdateView,
      meta: { layout: AdminLayout },
    },
    {
      path: "/admin/orders",
      name: "admin-order-list",
      component: AdminOrderListView,
      meta: { layout: AdminLayout },
    },
    {
      path: "/admin/orders/:id",
      name: "admin-order-detail",
      component: AdminOrderDetailView,
      meta: { layout: AdminLayout },
    },
    {
      path: "/admin/users",
      name: "admin-user-list",
      component: AdminUserListView,
      meta: { layout: AdminLayout },
    },
    {
      path: "/admin/users/update/:id",
      name: "admin-user-update",
      component: AdminUserUpdateView,
      meta: { layout: AdminLayout },
    },
  ],
});

export default router;
