export default defineNuxtConfig({
  components: true, // 자동 컴포넌트 가져오기 활성화
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/font.css', '~/assets/css/main.css'],
  // nuxt3 에서 plugins 는 명시적으로 호출됨
  // plugins: [
  //   '~/plugins/element-plus.js', // Element Plus 플러그인 추가
  // ],
});
