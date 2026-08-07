import content from '$lib/data/content.yaml';
import homepageSections from '$lib/data/homepage-sections.js';

export const load = () => {
  return {
    showHeader: false,
    showFooter: false,
    content,
    homepageSections,
  };
};
