import Vue from 'vue';
import VueRouter from 'vue-router';

const Layout = () => import('@/components/layout.vue');
const Home = () => import('@/views/Home.vue');
const Gene = () => import('@/views/gene/gene.vue');
const Genome = () => import('@/views/genome/index.vue');
const Nofind404 = () => import('@/views/error-page/404.vue');
const Developing = () => import('@/views/error-page/developing.vue');
const Team = () => import('@/views/team.vue');
const OnlineUse = () => import('@/views/onlineUse.vue');
const Variation = () => import('@/views/variation.vue');
const Download = () => import('@/views/download.vue');
const Help = () => import('@/views/help.vue');
const MolecularMarker = () => import('@/views/molecularMarker.vue');

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
        path: 'gene/:id',
        name: 'GeneDetail',
        component: Developing,
      },
      {
        path: 'genome',
        name: 'Genome',
        component: Genome,
      },
      {
        path: 'variation',
        name: 'Variation',
        component: Variation,
      },
      {
        path: 'onlineUse',
        name: 'OnlineUse',
        component: OnlineUse,
      },
      {
        path: 'download',
        name: 'Download',
        component: Download,
      },
      {
        path: 'molecularMarker',
        name: 'MolecularMarker',
        component: MolecularMarker,
      },
      {
        path: 'team',
        name: 'Team',
        component: Team,
      },
      {
        path: 'help',
        name: 'Help',
        component: Help,
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
