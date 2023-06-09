import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '',
			name: 'MainLayout',
			component: () => import('../layout/MainLayout.vue'),
			children: [
				{
					path: '',
					name: 'Index',
					component: () => import('../views/HomeView.vue'),
				},
				{
					path: 'details/:country',
					name: 'Details',
					component: () => import('../views/DetailsView.vue'),
				},
			],
		},
	],
});

export default router;
