<!--
@component
Profile.svelte — A personal portfolio profile card.

Displays a headshot, name, tagline, contact links, and an optional
"now / next" bio section. Intended as the hero block of a portfolio page.

USAGE EXAMPLE:
<Profile
  name="Jane Smith"
  tagline="Data journalist covering housing and inequality"
  photo="/photos/jane-smith.jpg"
  email="jane@example.com"
  github="janesmith"
  linkedin="janesmith"
  bio="Currently reporting on evictions for The City.

Next, I'm exploring machine learning tools for document analysis."
/>
-->
<script>
  import Image from '$lib/components/Media/Image.svelte';
  import IconEmail from '$lib/components/Icons/IconEmail.svelte';
  import IconGitHub from '$lib/components/Icons/IconGitHub.svelte';
  import IconLinkedIn from '$lib/components/Icons/IconLinkedIn.svelte';
  import IconBluesky from '$lib/components/Icons/IconBluesky.svelte';
  import ProfileContactLink from './ProfileContactLink.svelte';
  import ProfileBio from './ProfileBio.svelte';

  let { name, tagline, photo, photoAlt, email, github, linkedin, bluesky, bio } =
    $props();

  const contacts = $derived(
    [
      email
        ? {
            href: `mailto:${email}`,
            label: 'Email',
            external: false,
            icon: IconEmail,
          }
        : null,
      github
        ? {
            href: `https://github.com/${github}`,
            label: 'GitHub',
            external: true,
            icon: IconGitHub,
          }
        : null,
      linkedin
        ? {
            href: `https://linkedin.com/in/${linkedin}`,
            label: 'LinkedIn',
            external: true,
            icon: IconLinkedIn,
          }
        : null,
      bluesky
        ? {
            href: bluesky,
            label: 'Bluesky',
            external: true,
            icon: IconBluesky,
          }
        : null,
    ].filter(Boolean)
  );
</script>

<section class="profile">
  <div class="profile-hero">
    {#if photo}
      <div class="hero-photo-wrap">
        <Image src={photo} alt={photoAlt ?? name} size="full" />
      </div>
    {/if}

    <div class="hero-copy">
      <h1>{name}</h1>
      {#if tagline}
        <p class="tagline">{tagline}</p>
      {/if}

      <ul class="contact">
        {#each contacts as contact (contact.label)}
          <ProfileContactLink
            href={contact.href}
            label={contact.label}
            external={contact.external}
            icon={contact.icon}
          />
        {/each}
      </ul>

      <ProfileBio text={bio} />
    </div>
  </div>
</section>

<style lang="scss">
  @use '$lib/styles' as *;

  .profile {
    border-bottom: 3px solid var(--color-border);
    margin-bottom: var(--spacing-xxl);
    padding: var(--spacing-lg) 0 var(--spacing-sm);
  }

  .profile-hero {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacing-sm);
    align-items: stretch;
  }

  .hero-photo-wrap {
    grid-column: 1;
    background: transparent;

    :global(.image-figure) {
      margin: 0;
    }

    :global(.image) {
      display: block;
      width: 100%;
      max-width: 100%;
      aspect-ratio: 4 / 5;
      object-fit: cover;
      margin: 0;
      background: var(--color-light-gray);
    }
  }

  .hero-copy {
    grid-column: 2 / 4;
    container-type: inline-size;
    min-width: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  h1 {
    font-size: clamp(1.5rem, 13cqi, 4.5rem);
    line-height: var(--leading-tight);
    margin: 0;
  }

  .tagline {
    margin: 0 0 var(--spacing-sm);
    font-size: clamp(var(--font-size-sm), 2.5vw, var(--font-size-xl));
    color: var(--color-text);
    line-height: var(--leading-caption);
    max-width: 42rem;
  }

  .contact {
    list-style: none;
    padding: 0;
    margin: 8px 0 6px 0;
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-sm);
  }
</style>
