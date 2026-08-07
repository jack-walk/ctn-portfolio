<script>
  import Profile from '$lib/components/Portfolio/Profile.svelte';
  import ProfileContactLink from '$lib/components/Portfolio/ProfileContactLink.svelte';
  import ProfilePanelsScaffold from '$lib/components/Portfolio/ProfilePanelsScaffold.svelte';
  import ClipsScaffold from '$lib/components/Portfolio/ClipsScaffold.svelte';
  import Rule from '$lib/components/Layout/Rule.svelte';
  import IconEmail from '$lib/components/Icons/IconEmail.svelte';
  import IconGitHub from '$lib/components/Icons/IconGitHub.svelte';
  import IconLinkedIn from '$lib/components/Icons/IconLinkedIn.svelte';
  import IconBluesky from '$lib/components/Icons/IconBluesky.svelte';
  import { base } from '$app/paths';

  let { data } = $props();
  const content = $derived(data.content);
  const homepageSections = $derived(data.homepageSections);

  let quartersRemoved = $state(0);

  function handleBunniesClick() {
    if (quartersRemoved < 4) {
      quartersRemoved += 1;
    }
  }

  const offsetPercentage = $derived(quartersRemoved * 25);

  const topContacts = $derived(
    [
      content.profile.email
        ? {
            href: `mailto:${content.profile.email}`,
            label: 'Email',
            external: false,
            icon: IconEmail,
          }
        : null,
      content.profile.github
        ? {
            href: `https://github.com/${content.profile.github}`,
            label: 'GitHub',
            external: true,
            icon: IconGitHub,
          }
        : null,
      content.profile.linkedin
        ? {
            href: `https://linkedin.com/in/${content.profile.linkedin}`,
            label: 'LinkedIn',
            external: true,
            icon: IconLinkedIn,
          }
        : null,
      content.profile.bluesky
        ? {
            href: content.profile.bluesky,
            label: 'Bluesky',
            external: true,
            icon: IconBluesky,
          }
        : null,
    ].filter(Boolean)
  );
</script>

{#if topContacts.length > 0}
  <div class="contact-banner" aria-label="Contact links">
    <div class="banner-inner">
      <ul class="top-contact-links">
        {#each topContacts as contact (contact.label)}
          <ProfileContactLink
            href={contact.href}
            label={contact.label}
            external={contact.external}
            icon={contact.icon}
            variant="banner"
          />
        {/each}
      </ul>
    </div>
  </div>
{/if}

<div class="container">
  <Profile
    name={content.profile.name}
    tagline={content.profile.tagline}
    photo={content.profile.photo}
    photoAlt={content.profile.photoAlt}
    photoCredit={content.profile.photoCredit}
    email={content.profile.email}
    github={content.profile.github}
    linkedin={content.profile.linkedin}
    bluesky={content.profile.bluesky}
    bio={content.profile.bio}
    showContacts={false}
  />

  <ProfilePanelsScaffold panels={homepageSections.profilePanels.panels} />

  <Rule />

  <ClipsScaffold
    heading={homepageSections.clipsScaffold.heading}
    clipGroups={homepageSections.clipsScaffold.clipGroups}
  />

  <Rule />

  <button
    type="button"
    class="page-divider-button"
    onclick={handleBunniesClick}
    aria-label="Click to burrow the bunnies"
    disabled={quartersRemoved >= 4}
  >
    {#if quartersRemoved < 4}
      <img
        src="{base}/photos/bunnies.png"
        alt=""
        style="clip-path: inset(0 0 {offsetPercentage}% 0); transform: translateY({offsetPercentage /
          2}%)"
      />
    {:else}
      <div class="burrow-message">
        Rabbit underground, rabbit safe and sound.
      </div>
    {/if}
  </button>

  <p class="last-updated">{homepageSections.footerNote}</p>
</div>

<style lang="scss">
  @use '$lib/styles' as *;

  .contact-banner {
    background: var(--color-light-gray);
    border-bottom: var(--border-width-thin) solid var(--color-border);
  }

  .banner-inner {
    width: 100%;
    margin: 0;
    padding: calc(var(--spacing-xxs) + 4px)
      clamp(var(--spacing-sm), 3vw, var(--spacing-lg)) 2px;
    display: flex;
    justify-content: flex-end;
  }

  .container {
    --content-bar-gap: var(--spacing-md);
    padding-top: calc(var(--spacing-xxs) + 2px);
    padding-bottom: calc(var(--spacing-xxl) + var(--spacing-xxl));
  }

  .container :global(.rule) {
    border-top: 3px solid var(--color-border);
    margin: var(--content-bar-gap) 0;
  }

  .top-contact-links {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-sm);
    justify-content: flex-end;
  }

  .page-divider-button {
    display: block;
    width: 100%;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    margin-top: var(--spacing-lg);

    img {
      display: block;
      width: 30%;
      height: auto;
      margin: 0 auto;
      transition:
        clip-path 0.6s ease-out,
        transform 0.6s ease-out;
    }
  }

  .page-divider-button:disabled {
    cursor: default;
  }

  .page-divider-button:focus {
    outline: none;
  }

  .page-divider-button:active {
    background: transparent;
  }

  .burrow-message {
    text-align: center;
    font-family: var(--font-sans);
    font-size: var(--font-size-xl);
    color: var(--color-text);
    padding: var(--spacing-md);
    animation: fadeIn 0.6s ease-out;
  }

  .last-updated {
    margin: 0;
    text-align: center;
    font-size: var(--font-size-xs);
    letter-spacing: var(--letter-spacing-wide);
    color: color-mix(in srgb, var(--color-medium-gray) 70%, var(--color-white));
    text-transform: uppercase;
  }

  @include mobile {
    .banner-inner {
      padding-left: var(--spacing-xs);
      padding-right: var(--spacing-xs);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
