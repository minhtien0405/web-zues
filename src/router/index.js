import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UniversityView from '../views/UniversityView.vue'
import CourseView from '../views/CourseView.vue'
import UseCasesView from '../views/UseCasesView.vue'
import PlansView from '../views/PlansView.vue'
import ResourcesView from '../views/ResourcesView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/university',
    name: 'university',
    component: UniversityView
  },
  {
    path: '/course',
    name: 'course',
    component: CourseView
  },
  {
    path: '/usecases',
    name: 'usecases',
    component: UseCasesView
  },
  {
    path: '/plans',
    name: 'plans',
    component: PlansView
  },
  {
    path: '/resources',
    name: 'resource',
    component: ResourcesView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
