import Vue from 'vue';
import VueRouter from 'vue-router';

const Layout = () => import('@/components/layout.vue');
const Home = () => import('@/views/Home.vue');
const Gene = () => import('@/views/gene.vue');
const Nofind404 = () => import('@/views/error-page/404.vue');
const Developing = () => import('@/views/error-page/developing.vue');
const Team = () => import('@/views/team.vue');
const OnlineUse = () => import('@/views/onlineUse.vue');

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
      },
      {
        path: 'gene',
        name: 'Gene',
        component: Gene,
      },
      {
        path: 'onlineUse',
        name: 'OnlineUse',
        component: OnlineUse,
      },
      {
        path: 'download',
        name: 'Download',
        component: Nofind404,
      },
      {
        path: 'team',
        name: 'Team',
        component: Team,
      },
      {
        path: 'help',
        name: 'Help',
        component: Developing,
      },
      {
        path: '*',
        name: 'HomeAll',
        component: Developing,
      },
    ],
  },
  {
    // 会匹配所有路径
    path: '*',
    name: '/404',
    component: Nofind404,
  },

];

const router = new VueRouter({
  routes,
});

export default router;
