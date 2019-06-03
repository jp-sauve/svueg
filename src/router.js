import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Sliders from './components/Sliders.vue';
import showEllipseG from './views/showEllipseG.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/sliders',
      name: 'sliders',
      component: Sliders,
    },
    {
      path: '/shapes',
      name: 'shapes',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Shapes.vue'),
    },
    {
      path: '/ellipseg',
      name: 'ellipseg',
      component: showEllipseG,
    },
  ],
});
