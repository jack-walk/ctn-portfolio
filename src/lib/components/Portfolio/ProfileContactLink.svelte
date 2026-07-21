<!--
@component
ProfileContactLink.svelte — Reusable contact item for Profile.

Renders a single list item with a link, optional external behavior,
and an icon snippet.
-->
<script>
  let {
    href = '',
    label = '',
    external = false,
    icon = null,
    variant = 'default',
  } = $props();
</script>

<li class="contact-item {variant}">
  <a
    {href}
    target={external ? '_blank' : undefined}
    rel={external ? 'noopener' : undefined}
  >
    {#if icon}
      {@const Icon = icon}
      <Icon />
    {/if}
    <span>{label}</span>
  </a>
</li>

<style lang="scss">
  @use '$lib/styles' as *;

  .contact-item.default a {
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-xs);
    text-decoration: none;
    color: var(--color-text);
    font-size: var(--font-size-sm);
    border: var(--border-width-thin) solid var(--color-border);
    background: var(--color-white);
    padding: var(--spacing-xxs) var(--spacing-xs);
    transition: var(--transition-color);

    &:hover {
      color: var(--color-accent);
      border-color: var(--color-accent);
    }
  }

  .contact-item.banner a {
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-xs);
    text-decoration: none;
    color: var(--color-medium-gray);
    font-size: var(--font-size-xs);
    font-family: var(--font-serif);
    letter-spacing: var(--letter-spacing-wide);
    text-transform: uppercase;
    padding: 0;
  }

  .contact-item.banner a:hover {
    color: var(--color-accent);
  }

  .contact-item :global(svg) {
    width: var(--font-size-lg);
    height: var(--font-size-lg);
    flex-shrink: 0;
  }

  @include mobile {
    .contact-item.default a {
      padding: var(--spacing-xxs);
      gap: 0;
    }

    .contact-item.default a span {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }
  }
</style>
