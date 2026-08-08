<!--
  ProfilePanelsScaffold.stories.svelte

  Stories for the ProfilePanelsScaffold component.
  ProfilePanelsScaffold renders an accordion of labelled panels (e.g. resume,
  skills, awards). Clicking a panel button toggles its content open or closed;
  only one panel is open at a time.

  Props:
  - panels: Array of { id, title, content? | placeholder? } objects; defaults to []
-->
<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import ProfilePanelsScaffold from '$lib/components/Portfolio/ProfilePanelsScaffold.svelte';

  const { Story } = defineMeta({
    title: 'Portfolio/ProfilePanelsScaffold',
    component: ProfilePanelsScaffold,
    tags: ['autodocs'],
    args: {
      panels: [
        {
          id: 'resume',
          title: 'Résumé',
          content: [
            {
              heading: 'Professional Experience',
              items: [
                {
                  label: 'Newsroom Role',
                  meta: 'Dates | Location',
                },
              ],
            },
          ],
        },
        {
          id: 'skills',
          title: 'Skills',
          placeholder: 'List your skills here.',
        },
        {
          id: 'awards',
          title: 'Awards',
          placeholder: 'List your awards here.',
        },
      ],
    },
    argTypes: {
      panels: {
        control: 'object',
        description:
          'Array of panel objects, each with id/title and either structured content data or placeholder text.',
      },
    },
  });
</script>

<!-- Default: three panels, all collapsed -->
<Story name="Default">
  {#snippet children(args)}
    <div style="max-width: 800px; padding: 2rem;">
      <ProfilePanelsScaffold {...args} />
    </div>
  {/snippet}
</Story>

<!-- Empty: no panels passed -->
<Story name="Empty" args={{ panels: [] }}>
  {#snippet children(args)}
    <div style="max-width: 800px; padding: 2rem;">
      <ProfilePanelsScaffold {...args} />
    </div>
  {/snippet}
</Story>

<!-- Single Panel: only one panel in the grid -->
<Story
  name="Single Panel"
  args={{
    panels: [
      {
        id: 'resume',
        title: 'Résumé',
        content: [
          {
            heading: 'Professional Experience',
            items: [
              {
                label: 'Newsroom Role',
                meta: 'Dates | Location',
              },
            ],
          },
        ],
      },
    ],
  }}
>
  {#snippet children(args)}
    <div style="max-width: 800px; padding: 2rem;">
      <ProfilePanelsScaffold {...args} />
    </div>
  {/snippet}
</Story>
