<script>
  import { page } from '$app/state';
</script>

{#if page.status >= 500}
  <h1>{page.status} Internal Error</h1>
{:else}
  <h1>{page.status} {page.error?.message ?? 'Error'}</h1>
{/if}
