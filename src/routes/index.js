import { createRouter, createWebHistory } from 'vue-router';
import Home from './Home';
import Movies from './Movies';
import Detail from './Detail';
import NotFound from './NotFound';

export default createRouter({
  history: createWebHistory(),
  scrollBehavior: (to) => {
    if (to.name === 'Detail' || to.name === 'Movies') return ;
    else return { top: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/movies',
      name: 'Movies',
      component: Movies,
      children: [
        {
          path: ':id',
          name: 'Detail',
          component: Detail,
        }
      ]
    },
    {
      path: '/notFound',
      name: 'NotFound',
      component: NotFound
    }
  ]
});
