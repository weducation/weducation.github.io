export default defineNuxtRouteMiddleware(async (to) => {
  const user = await getCurrentUser();

  if (!user && to.path === '/loggedin') {
    return navigateTo('/auth');
  } else if (user && to.path === '/auth') {
    return navigateTo('/loggedin');
  }
});
