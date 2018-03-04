import ContentList from './components/ContentList/ContentList.vue';
import Content from './components/Content/Content.vue';
import Step from './components/Step/Step.vue';

export default [
  { path: '/', redirect: '/c' },
  { path: '/c', component: ContentList },
  { path: '/c/:contentId', component: Content },
  { path: '/c/:contentId/s/:stepId/p/:page', component: Step },
  { path: '*', redirect: '/' },
];
