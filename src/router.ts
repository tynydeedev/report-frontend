import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import Account from './components/notes-app/Account.vue';
import CreateNote from './components/notes-app/CreateNote.vue';
import Dashboard from './components/notes-app/Dashboard.vue';
import NotesApp from './components/notes-app/NotesApp.vue';

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
          path: 'signin',
          alias: '',
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
        {
          path: 'create',
          component: CreateNote,
        },
      ],
    },
  ],
});
