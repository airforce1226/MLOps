export default defineNuxtRouteMiddleware((to, from) => {
  // 루트 경로면 로그인 페이지로 리다이렉트
  if (to.path === '/') {
    return navigateTo('/signin');
  }
});
