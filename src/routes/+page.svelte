<script lang="ts">
  import siteData from "../siteData";
  let redirectTimeoutId: ReturnType<typeof setTimeout> | null = null;

  if (siteData.redirect) {
    redirectTimeoutId = setTimeout(() => {
      window.location.href = siteData.redirectUrl;
    }, siteData.redirectTime || 3000);
  }

const stopRedirect = (e: MouseEvent) => {
  if (!redirectTimeoutId) return;
  e.preventDefault();
  clearTimeout(redirectTimeoutId);
  redirectTimeoutId = null;
  alert("Redirecionamento cancelado.");
}
</script>

<main oncontextmenu={stopRedirect} class="h-screen bg-stone-50 dark:bg-stone-900 text-stone-950 dark:text-stone-50 flex flex-col items-center justify-center gap-4">
  <h1 class="text-4xl font-bold">Weducation</h1>
  {#if siteData.redirect && redirectTimeoutId}
  <p>⏲️ Redirecionado, por favor aguarde...</p>
  {:else}
  <p>Olá, pequeno gafanhoto! 🖖🏼</p>
  {/if}
</main>