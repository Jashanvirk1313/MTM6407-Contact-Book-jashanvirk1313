import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../Views/HomeView.vue';
import ContactDetailView from '../Views/ContactDetailView.vue';
import NewContactView from '../Views/NewContactView.vue';
import EditContactView from '../Views/EditContactView.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/contact/:id', name: 'ContactDetail', component: ContactDetailView },
  { path: '/new', name: 'NewContact', component: NewContactView },
  { path: '/edit/:id', name: 'EditContact', component: EditContactView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
