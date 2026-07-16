<script>
  import Profile from '$lib/components/Portfolio/Profile.svelte';
  import Card from '$lib/components/Data/Card.svelte';
  import CardGrid from '$lib/components/Data/CardGrid.svelte';
  import { base } from '$app/paths';

  let { data } = $props();
  const content = $derived(data.content);

  let quartersRemoved = $state(0);

  function handleBunniesClick() {
    if (quartersRemoved < 4) {
      quartersRemoved += 1;
    }
  }

  const clipPercentage = $derived(100 - quartersRemoved * 25);
  const offsetPercentage = $derived(quartersRemoved * 25);
</script>

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
  />

  <CardGrid>
    {#each content.clips as clip (clip.title)}
      <Card
        href="{base}/clips/{clip.slug}"
        image={clip.image}
        imageAlt={clip.title}
      >
        <h3>{clip.title}</h3>
        <p>{clip.description}</p>
      </Card>
    {/each}
  </CardGrid>

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
        style="clip-path: inset(0 0 {offsetPercentage}% 0); transform: translateY({offsetPercentage / 2}%)"
      />
    {:else}
      <div class="burrow-message">Rabbit underground, rabbit safe and sound.</div>
    {/if}
  </button>
</div>

<style lang="scss">
  .page-divider-button {
    display: block;
    width: 100%;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    margin-top: var(--spacing-xl);

    img {
      display: block;
      width: 30%;
      height: auto;
      margin: 0 auto;
      transition: clip-path 0.6s ease-out, transform 0.6s ease-out;
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

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>