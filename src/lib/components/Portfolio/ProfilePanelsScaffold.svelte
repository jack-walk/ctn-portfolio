<!--
@component
ProfilePanelsScaffold.svelte — Placeholder accordion for resume/skills/awards.

Provides scaffolded dropdown sections with placeholder copy that can be swapped
for real content later.
-->
<script>
  let { panels = [] } = $props();

  let openPanel = $state(null);

  function togglePanel(panelId) {
    openPanel = openPanel === panelId ? null : panelId;
  }
</script>

<section class="profile-panels" aria-label="Portfolio details">
  <div class="panel-buttons" aria-label="Portfolio detail sections">
    {#each panels as panel, i (panel.id)}
      <div class="panel-slot" style={`--slot-index: ${i};`}>
        <button
          type="button"
          class="panel-toggle"
          class:active={openPanel === panel.id}
          onclick={() => togglePanel(panel.id)}
          aria-expanded={openPanel === panel.id}
          aria-controls={`panel-content-${panel.id}`}
        >
          <span>{panel.title}</span>
          <span class="chevron" aria-hidden="true">▾</span>
        </button>

        {#if openPanel === panel.id}
          <article id={`panel-content-${panel.id}`} class="panel-content">
            {#if panel.content}
              {#each panel.content as section, sectionIndex (section.heading ?? sectionIndex)}
                {#if section.heading}
                  <h3>{section.heading}</h3>
                {/if}

                {#if section.items?.length}
                  <ul>
                    {#each section.items as item, itemIndex (item.label ?? item.meta ?? item.text ?? itemIndex)}
                      <li>
                        {#if item.label}
                          <strong>{item.label}</strong>
                        {/if}
                        {#if item.text}
                          {item.text}
                        {/if}
                        {#if item.meta}
                          <br />
                          <span>{item.meta}</span>
                        {/if}
                      </li>
                    {/each}
                  </ul>
                {/if}
              {/each}
            {:else}
              <p>{panel.placeholder}</p>
            {/if}
          </article>
        {/if}
      </div>
    {/each}
  </div>
</section>

<style lang="scss">
  @use '$lib/styles' as *;

  .profile-panels {
    display: block;
  }

  .panel-buttons {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: var(--spacing-xs);
    align-items: start;
  }

  .panel-slot {
    min-width: 0;
  }

  .panel-toggle {
    width: 100%;
    min-height: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: var(--border-width-thin) solid var(--color-border);
    background: transparent;
    padding: var(--spacing-xs) var(--spacing-sm);
    color: var(--color-text);
    font-family: var(--font-serif);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-bold);
    letter-spacing: var(--letter-spacing-wide);
    text-transform: uppercase;
    cursor: pointer;
  }

  .panel-toggle:hover {
    color: var(--color-accent);
    border-color: var(--color-accent);
  }

  .panel-toggle.active {
    color: var(--color-accent);
    border-color: var(--color-accent);
    position: relative;
    z-index: 2;
  }

  .panel-toggle[aria-expanded='true'] .chevron {
    transform: rotate(180deg);
  }

  .chevron {
    transition: transform 0.2s ease;
  }

  .panel-content {
    /* Expand the opened panel to full row width on larger screens. */
    width: calc(300% + (2 * var(--spacing-xs)));
    margin-left: calc((var(--slot-index) * -1) * (100% + var(--spacing-xs)));
    margin-top: var(--spacing-xxs);
    padding: var(--spacing-sm);
    border: var(--border-width-thin) solid var(--color-border);
    background: var(--color-white);
    position: relative;
  }

  .panel-content::before {
    content: '';
    position: absolute;
    top: -10px;
    left: calc((var(--slot-index) * (100% + var(--spacing-xs))) + 50%);
    width: var(--border-width-thin);
    height: 10px;
    background: var(--color-border);
    transform: translateX(-50%);
  }

  .panel-content p {
    margin: var(--spacing-xs) 0 0;
    color: var(--color-medium-gray);
    font-size: var(--font-size-sm);
    line-height: var(--leading-caption);
  }

  .panel-content :global(h3) {
    margin: var(--spacing-xs) 0;
    font-family: var(--font-serif);
    font-size: var(--font-size-md);
    text-transform: uppercase;
    letter-spacing: var(--letter-spacing-wide);
    color: var(--color-text);
  }

  .panel-content :global(ul) {
    margin: 0 0 var(--spacing-sm);
    padding-left: var(--spacing-md);
  }

  .panel-content :global(li) {
    margin-bottom: var(--spacing-xs);
    color: var(--color-medium-gray);
    font-size: var(--font-size-sm);
    line-height: var(--leading-caption);
  }

  .panel-content :global(strong) {
    color: var(--color-text);
  }

  @include mobile {
    .panel-buttons {
      grid-template-columns: 1fr;
    }

    .panel-content {
      width: 100%;
      margin-left: 0;
      margin-top: var(--spacing-xs);
      position: relative;
    }

    .panel-content::before {
      content: '';
      position: absolute;
      top: -10px;
      left: 1.25rem;
      width: var(--border-width-thin);
      height: 10px;
      background: var(--color-border);
    }
  }
</style>
