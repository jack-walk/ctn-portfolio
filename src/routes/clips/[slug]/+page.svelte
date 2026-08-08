<script>
  import Kicker from '$lib/components/Article/Kicker.svelte';
  import Headline from '$lib/components/Article/Headline.svelte';
  import Image from '$lib/components/Media/Image.svelte';
  import Rule from '$lib/components/Layout/Rule.svelte';
  import TagList from '$lib/components/Data/TagList.svelte';
  import ArticleBody from '$lib/components/Article/ArticleBody.svelte';
  import { base } from '$app/paths';

  let { data } = $props();
</script>

<div class="container">
  <Kicker text="{data.profile.name}'s Portfolio" href="{base}/" />
  <Headline text={data.clip.title} />

  <Image src={data.clip.image} alt={data.clip.title} />
  <div class="caption-container" aria-label="Image credit">
    {#if data.clip.imageCredit}
      <span class="credit">{data.clip.imageCredit}</span>
    {/if}
  </div>

  <Rule />
  <TagList label="Skills" tags={data.clip.skills} />
  <TagList
    label="View Project"
    tags={[{ text: new URL(data.clip.url).hostname, href: data.clip.url }]}
  />
  <Rule />

  <ArticleBody>
    {#each data.clip.body.trim().split('\n\n') as paragraph, i (i)}
      <p>{paragraph}</p>
    {/each}
  </ArticleBody>
</div>

<style lang="scss">
  .container :global(.image-figure) {
    margin-bottom: var(--spacing-xxs);
  }

  .caption-container {
    margin-top: 0;
    text-align: right;
  }

  .credit {
    display: block;
    font-size: var(--font-size-xs);
    font-style: italic;
    color: var(--color-medium-gray);
  }
</style>
