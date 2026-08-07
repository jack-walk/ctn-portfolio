<!--
@component
ClipsScaffold.svelte — Placeholder clips section scaffold.

Creates structured rows for future linked clip content grouped by beat.
-->
<script>
  let {
    heading = "Find my reporting on:",
    clipGroups = [],
  } = $props();
</script>

<section class="clips-scaffold" aria-label="Reporting clips">
  {#if heading}
    <h2>{heading}</h2>
  {/if}

  {#each clipGroups as group (group.label)}
    <section class="clip-group" aria-label={group.label}>
      <h3>{group.label}.</h3>
      <div class="clip-grid">
        {#each group.items as item, i (i)}
          <a href={item.href} class="clip-item" class:featured={item.featured}>
            {#if item.featured}
              <div class="thumb" aria-hidden="true">Image placeholder</div>
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
    margin: 0;
    font-family: var(--font-display);
    font-size: clamp(var(--font-size-2xl), 4.5vw, var(--font-size-5xl));
    line-height: var(--leading-snug);
  }

  .clip-group {
    display: grid;
    gap: var(--spacing-xs);
  }

  .clip-group h3 {
    margin: 0;
    font-family: var(--font-serif);
    font-size: var(--font-size-lg);
    letter-spacing: var(--letter-spacing-tight);
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
    background: linear-gradient(135deg, var(--color-light-gray), #ece7eb);
    border: var(--border-width-thin) dashed var(--color-border);
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

  @include mobile {
    .clip-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
