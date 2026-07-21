<!--
@component
SpeechBubble.svelte — Reusable speech bubble wrapper.

Renders either a CSS speech bubble or an optional custom bubble artwork layer
while keeping the same text layout.
-->
<script>
  import { base } from '$app/paths';

  let { bubbleImage = '', bubbleImageAlt = '', children } = $props();

  const hasCustomBubble = $derived(Boolean(bubbleImage?.trim()));
  const resolvedBubbleImage = $derived(
    !hasCustomBubble
      ? ''
      : bubbleImage.startsWith('http://') || bubbleImage.startsWith('https://')
        ? bubbleImage
        : bubbleImage.startsWith('/')
          ? `${base}${bubbleImage}`
          : `${base}/${bubbleImage}`
  );
</script>

<div class="speech-bubble" class:has-custom-bubble={hasCustomBubble}>
  {#if hasCustomBubble}
    <!-- Optional custom bubble artwork layer for easy design swaps -->
    <img class="bubble-art" src={resolvedBubbleImage} alt={bubbleImageAlt} />
  {/if}

  <div class="bubble-copy">
    {@render children?.()}
  </div>
</div>

<style lang="scss">
  @use '$lib/styles' as *;

  .speech-bubble {
    position: relative;
    margin-top: var(--spacing-xs);
    margin-left: clamp(-18px, -1.8vw, -8px);
    background: var(--color-white);
    border: var(--border-width-thin) solid var(--color-border);
    border-radius: 16px;
    padding: var(--spacing-sm);
    box-shadow: 0 6px 18px var(--color-shadow);
    z-index: 2;
  }

  .bubble-copy {
    position: relative;
    z-index: 1;
  }

  .speech-bubble::before,
  .speech-bubble::after {
    content: '';
    position: absolute;
    left: -18px;
    width: 0;
    height: 0;
    border-top: 12px solid transparent;
    border-bottom: 12px solid transparent;
  }

  .speech-bubble::before {
    top: 24px;
    border-right: 20px solid var(--color-border);
  }

  .speech-bubble::after {
    top: 25px;
    left: -16px;
    border-right: 18px solid var(--color-white);
  }

  .speech-bubble.has-custom-bubble {
    background: transparent;
    border: 0;
    box-shadow: none;
    padding: 0;
    overflow: visible;
  }

  .speech-bubble.has-custom-bubble::before,
  .speech-bubble.has-custom-bubble::after {
    display: none;
  }

  .speech-bubble.has-custom-bubble .bubble-copy {
    padding: var(--spacing-sm);
  }

  .bubble-art {
    position: absolute;
    inset: -12px -14px -12px -20px;
    width: calc(100% + 34px);
    height: calc(100% + 24px);
    object-fit: fill;
    pointer-events: none;
    z-index: 0;
  }

  @include mobile {
    .speech-bubble {
      margin-top: 0;
      margin-left: 0;
      border: 0;
      border-radius: 0;
      background: transparent;
      box-shadow: none;
      padding: 0;
    }

    .speech-bubble::before,
    .speech-bubble::after {
      display: none;
    }

    .speech-bubble.has-custom-bubble .bubble-copy {
      padding: 0;
    }

    .bubble-art {
      display: none;
    }
  }
</style>
