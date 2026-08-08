import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/svelte';
import ClipsScaffold from '$lib/components/Portfolio/ClipsScaffold.svelte';
import Profile from '$lib/components/Portfolio/Profile.svelte';
import ProfilePanelsScaffold from '$lib/components/Portfolio/ProfilePanelsScaffold.svelte';

describe('Profile', () => {
  it('renders the name as a heading', () => {
    render(Profile, { props: { name: 'Max Eastman' } });
    expect(screen.getByRole('heading', { name: 'Max Eastman' })).toBeTruthy();
  });

  it('renders the tagline when provided', () => {
    render(Profile, {
      props: { name: 'Max Eastman', tagline: 'Editor of The Masses' },
    });
    expect(screen.getByText('Editor of The Masses')).toBeTruthy();
  });

  it('does not render a tagline element when omitted', () => {
    const { container } = render(Profile, { props: { name: 'Max Eastman' } });
    expect(container.querySelector('.tagline')).toBeNull();
  });

  it('renders an email link when provided', () => {
    render(Profile, {
      props: { name: 'Max Eastman', email: 'max@example.com' },
    });
    const link = screen.getByRole('link', { name: /email/i });
    expect(link.getAttribute('href')).toBe('mailto:max@example.com');
  });

  it('renders a GitHub link when provided', () => {
    render(Profile, {
      props: { name: 'Max Eastman', github: 'maxeastman' },
    });
    const link = screen.getByRole('link', { name: /github/i });
    expect(link.getAttribute('href')).toBe('https://github.com/maxeastman');
  });

  it('renders a LinkedIn link when provided', () => {
    render(Profile, {
      props: { name: 'Max Eastman', linkedin: 'maxeastman' },
    });
    const link = screen.getByRole('link', { name: /linkedin/i });
    expect(link.getAttribute('href')).toBe(
      'https://linkedin.com/in/maxeastman'
    );
  });

  it('renders a Bluesky link when provided', () => {
    render(Profile, {
      props: {
        name: 'Max Eastman',
        bluesky: 'https://bsky.app/profile/maxeastman.bsky.social',
      },
    });
    const link = screen.getByRole('link', { name: /bluesky/i });
    expect(link.getAttribute('href')).toBe(
      'https://bsky.app/profile/maxeastman.bsky.social'
    );
  });

  it('does not render contact links when none are provided', () => {
    const { container } = render(Profile, { props: { name: 'Max Eastman' } });
    expect(container.querySelectorAll('.contact li')).toHaveLength(0);
  });

  it('can hide contact links even when contact props are provided', () => {
    const { container } = render(Profile, {
      props: {
        name: 'Max Eastman',
        email: 'max@example.com',
        showContacts: false,
      },
    });

    expect(container.querySelector('.contact')).toBeNull();
  });

  it('renders a photo with the name as default alt text', () => {
    render(Profile, {
      props: { name: 'Max Eastman', photo: '/photos/max.jpg' },
    });
    expect(screen.getByAltText('Max Eastman')).toBeTruthy();
  });

  it('renders a photo with explicit alt text when provided', () => {
    render(Profile, {
      props: {
        name: 'Max Eastman',
        photo: '/photos/max.jpg',
        photoAlt: 'Max Eastman in 1915',
      },
    });
    expect(screen.getByAltText('Max Eastman in 1915')).toBeTruthy();
  });

  it('keeps external photo URLs unchanged', () => {
    render(Profile, {
      props: {
        name: 'Max Eastman',
        photo: 'https://example.com/max.jpg',
        photoAlt: 'External photo',
      },
    });
    const img = screen.getByAltText('External photo');
    expect(img.getAttribute('src')).toBe('https://example.com/max.jpg');
  });

  it('renders bio paragraphs', () => {
    render(Profile, {
      props: {
        name: 'Max Eastman',
        bio: 'Currently editing The Masses.\n\nNext, translating Trotsky.',
      },
    });
    expect(screen.getByText('Currently editing The Masses.')).toBeTruthy();
    expect(screen.getByText('Next, translating Trotsky.')).toBeTruthy();
  });

  it('does not render the bio section when bio is omitted', () => {
    const { container } = render(Profile, { props: { name: 'Max Eastman' } });
    expect(container.querySelector('.now-next')).toBeNull();
  });
});

const SAMPLE_PANELS = [
  { id: 'resume', title: 'Résumé', placeholder: 'Work experience here.' },
  { id: 'skills', title: 'Skills', placeholder: 'Skills here.' },
  { id: 'awards', title: 'Awards', placeholder: 'Awards here.' },
];

describe('ProfilePanelsScaffold', () => {
  it('renders a button for each panel', () => {
    render(ProfilePanelsScaffold, { props: { panels: SAMPLE_PANELS } });
    expect(screen.getByRole('button', { name: /résumé/i })).toBeTruthy();
    expect(screen.getByRole('button', { name: /skills/i })).toBeTruthy();
    expect(screen.getByRole('button', { name: /awards/i })).toBeTruthy();
  });

  it('renders no content panels on initial load', () => {
    const { container } = render(ProfilePanelsScaffold, {
      props: { panels: SAMPLE_PANELS },
    });
    expect(container.querySelectorAll('.panel-content')).toHaveLength(0);
  });

  it('expands a panel when its button is clicked', async () => {
    render(ProfilePanelsScaffold, { props: { panels: SAMPLE_PANELS } });
    const btn = screen.getByRole('button', { name: /résumé/i });
    await fireEvent.click(btn);
    expect(screen.getByText('Work experience here.')).toBeTruthy();
  });

  it('collapses an open panel when its button is clicked again', async () => {
    const { container } = render(ProfilePanelsScaffold, {
      props: { panels: SAMPLE_PANELS },
    });
    const btn = screen.getByRole('button', { name: /résumé/i });
    await fireEvent.click(btn);
    await fireEvent.click(btn);
    expect(container.querySelectorAll('.panel-content')).toHaveLength(0);
  });

  it('only one panel is open at a time', async () => {
    const { container } = render(ProfilePanelsScaffold, {
      props: { panels: SAMPLE_PANELS },
    });
    await fireEvent.click(screen.getByRole('button', { name: /résumé/i }));
    await fireEvent.click(screen.getByRole('button', { name: /skills/i }));
    expect(container.querySelectorAll('.panel-content')).toHaveLength(1);
    expect(screen.getByText('Skills here.')).toBeTruthy();
  });

  it('renders nothing when panels is empty', () => {
    const { container } = render(ProfilePanelsScaffold, {
      props: { panels: [] },
    });
    expect(container.querySelectorAll('.panel-toggle')).toHaveLength(0);
  });
});

describe('ClipsScaffold', () => {
  it('renders featured card images when provided', () => {
    render(ClipsScaffold, {
      props: {
        clipGroups: [
          {
            label: 'Data',
            items: [
              {
                headline: 'Mapped story',
                href: '#',
                featured: true,
                image: '/photos/storybook/data-dashboard.png',
                imageAlt: 'Sample dashboard graphic',
              },
            ],
          },
        ],
      },
    });

    const image = screen.getByAltText('Sample dashboard graphic');
    expect(image.getAttribute('src')).toContain(
      '/photos/storybook/data-dashboard.png'
    );
  });

  it('keeps a placeholder area for featured cards without images', () => {
    const { container } = render(ClipsScaffold, {
      props: {
        clipGroups: [
          {
            label: 'Audio',
            items: [
              {
                headline: 'Placeholder audio story',
                href: '#',
                featured: true,
              },
            ],
          },
        ],
      },
    });

    expect(container.querySelector('.thumb--placeholder')).toBeTruthy();
    expect(screen.getByText('Image placeholder')).toBeTruthy();
  });
});
