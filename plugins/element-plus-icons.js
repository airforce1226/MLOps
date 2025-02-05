// plugins/element-plus-icons.js
import { defineNuxtPlugin } from '#app';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import 'animate.css';

export default defineNuxtPlugin((nuxtApp) => {
  // 전역으로 모든 아이콘 등록
  Object.keys(ElementPlusIconsVue).forEach((key) => {
    nuxtApp.vueApp.component(key, ElementPlusIconsVue[key]);
  });
});
