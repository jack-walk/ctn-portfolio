<!--
@component
ClipsScaffold.svelte — Placeholder clips section scaffold.

Creates structured rows for future linked clip content grouped by beat.
-->
<script>
  import { asset } from '$app/paths';

  let { heading = "I've reported on...", clipGroups = [] } = $props();

  function resolveImage(src = '') {
    const isLocalPath = src.startsWith('/') && !src.startsWith('//');

    return isLocalPath ? asset(src) : src;
  }
</script>

<section class="clips-scaffold" aria-label="Reporting clips">
  {#if heading}
    <h2>{heading}</h2>
  {/if}

  {#each clipGroups as group (group.label)}
    <section class="clip-group" aria-label={group.label}>
      <h3>{group.label}</h3>
      <div class="clip-grid">
        {#each group.items as item, i (i)}
          <a href={item.href} class="clip-item" class:featured={item.featured}>
            {#if item.featured}
              <div class="thumb" class:thumb--placeholder={!item.image}>
                {#if item.image}
                  <img
                    src={resolveImage(item.image)}
                    alt={item.imageAlt ?? ''}
                    loading="lazy"
                  />
                {:else}
                  <span aria-hidden="true">Image placeholder</span>
                {/if}
              </div>
            {/if}
            <p>{item.headline}</p>
          </a>
        {/each}
      </div>
    </section>
  {/each}
</section>

<style lang="scss">
  @use '$lib/styles' as *;

  .clips-scaffold {
    display: grid;
    gap: var(--spacing-md);
  }

  .clips-scaffold h2 {
    font-size: clamp(var(--font-size-2xl), 4.5vw, var(--font-size-5xl));
    line-height: var(--leading-tight);
    margin: 0;
  }

  .clip-group {
    display: grid;
    gap: var(--spacing-xs);
  }

  .clip-group h3 {
    margin: 0;
    width: fit-content;
    padding: 0.2rem 0.65rem;
    border-radius: 999px;
    background: color-mix(in srgb, var(--color-accent) 12%, var(--color-white));
    color: color-mix(in srgb, var(--color-text) 62%, var(--color-white));
    font-family: var(--font-serif);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-medium);
    letter-spacing: var(--letter-spacing-wide);
    line-height: 1;
  }

  .clip-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: var(--spacing-sm);
  }

  .clip-item {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xs);
    min-height: 100%;
    padding: var(--spacing-xs);
    border: var(--border-width-thin) solid var(--color-border);
    background: var(--color-white);
    text-decoration: none;
  }

  .clip-item:hover {
    border-color: var(--color-accent);
    text-decoration: none;
  }

  .thumb {
    width: 100%;
    aspect-ratio: 16 / 9;
    display: grid;
    place-items: center;
    overflow: hidden;
    background: linear-gradient(135deg, var(--color-light-gray), #ece7eb);
    border: var(--border-width-thin) solid var(--color-border);
  }

  .thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .thumb--placeholder {
    border-style: dashed;
    color: var(--color-medium-gray);
    font-size: var(--font-size-xs);
    text-transform: uppercase;
    letter-spacing: var(--letter-spacing-wide);
  }

  .clip-item p {
    margin: 0;
    color: var(--color-text);
    font-family: var(--font-serif);
    line-height: var(--leading-caption);
    font-size: var(--font-size-base);
  }

  @media (max-width: 900px) {
    .clip-group {
      gap: var(--spacing-sm);
    }

    .clip-group + .clip-group {
      border-top: var(--border-width-thin) solid var(--color-border);
      padding-top: var(--spacing-md);
    }

    .clip-grid {
      grid-template-columns: 1fr;
      justify-items: center;
    }

    .clip-item {
      width: min(100%, 17rem);
      gap: var(--spacing-xxs);
      padding: var(--spacing-xxs);
    }

    .thumb {
      aspect-ratio: 16 / 7;
    }

    .clip-item p {
      font-size: var(--font-size-sm);
    }
  }
</style>
