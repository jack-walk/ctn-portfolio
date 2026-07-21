import content from '$lib/data/content.yaml';

export const entries = () => content.clips.map((c) => ({ slug: c.slug }));

export const load = ({ params }) => {
  const clip = content.clips.find((c) => c.slug === params.slug);

  return {
    showHeader: false,
    showFooter: false,
    profile: content.profile,
    clip,
  };
};
