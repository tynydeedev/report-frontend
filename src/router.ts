import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import Account from './components/notes-app/Account.vue';
import Dashboard from './components/notes-app/Dashboard.vue';
import NotesApp from './components/notes-app/NotesApp.vue';
import NotesHome from './components/notes-app/NotesHome.vue';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/notes',
      component: NotesApp,
      children: [
        {
          path: '',
          component: NotesHome,
        },
        {
          path: 'signin',
          component: Account,
        },
        {
          path: 'signup',
          component: Account,
        },
        {
          path: 'dashboard',
          component: Dashboard,
        },
      ],
    },
  ],
});
