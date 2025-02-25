import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [{
        path: '/Exercises2',
        name: 'Exercises2',
        component: () => import('../views/ExerciseList2.vue')
    },
    {
        path:'/Exercises1',
        name: 'Exercises1',
        component : () => import('../views/ExerciseList1.vue')
    },
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue')
    }

]
});

export default router;
