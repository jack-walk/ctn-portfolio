<!--
@component
ProfileBio.svelte — Reusable paragraph block for Profile bio text.

Accepts a string and renders paragraphs separated by blank lines.
-->
<script>
  import SpeechBubble from './SpeechBubble.svelte';

  let { text = '', bubbleImage = '', bubbleImageAlt = '' } = $props();

  let paragraphs = $derived(text ? text.trim().split('\n\n') : []);
</script>

{#if paragraphs.length > 0}
  <div class="now-next">
    <SpeechBubble {bubbleImage} {bubbleImageAlt}>
      {#snippet children()}
        {#each paragraphs as para, i (i)}
          <p>{para}</p>
        {/each}
      {/snippet}
    </SpeechBubble>
  </div>
{/if}

<style lang="scss">
  .now-next p {
    font-family: var(--font-serif);
    line-height: var(--leading-normal);
    margin: 0 0 var(--spacing-xs);
    max-width: 46rem;
    font-size: 1rem;
  }

  .now-next p:last-child {
    margin-bottom: 0;
  }
</style>
