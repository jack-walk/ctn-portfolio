const homepageSections = {
  profilePanels: {
    clickLabel: 'CLICK!',
    panels: [
      {
        id: 'resume',
        title: 'RESUME',
        content: [
          {
            heading: 'Data Experience',
            items: [
              {
                label: 'Reuters:',
                text: ' Data Journalism Intern',
                meta: 'June 2026 to September 2026 | New York, NY',
              },
              {
                label: 'Associated Press:',
                text: ' Elections Automated Web Scraper',
                meta: 'Oct. 2025 to Present | Remote',
              },
              {
                label: 'Brown University Library:',
                text: ' GIS and Data Associate',
                meta: 'Sept. 2025 to May 2023 | Providence, RI',
              },
            ],
          },
          {
            heading: 'Local News Experience',
            items: [
              {
                label: 'The Advocate:',
                text: ' Reporting Fellow',
                meta: 'Jan. 2026 to June 2026 | New York, NY',
              },
              {
                label: 'WNYC.',
                text: ' Audio Production Intern',
                meta: 'Jan. 2026 to June 2026 | New York, NY',
              },
              {
                label: 'West Virginia Public Broadcasting:',
                text: ' Statehouse and Regional Reporter',
                meta: 'Jan. 2024 to Aug. 2025 | Charleston and Shepherdstown, West Virginia',
              },
              {
                label: 'Times West Virginian:',
                text: ' General Assignment Reporter',
                meta: 'July to Dec. 2023 | Fairmont, West Virginia',
              },
            ],
          },
          {
            heading: 'Undergraduate Experience',
            items: [
              {
                label: 'The Brown Daily Herald:',
                text: ' Senior Editor',
                meta: 'Dec. 2021 to Dec. 2022 | Providence, Rhode Island',
              },
              {
                label: 'Washington Blade:',
                text: ' Editorial Fellow',
                meta: 'May to Sept. 2022 | Rehoboth Beach, Delaware',
              },
            ],
          },
        ],
      },
      {
        id: 'skills',
        title: 'SKILLS',
        content: [
          {
            items: [
              {
                label: 'Data:',
                text: ' Python, pandas, Excel. HTML, CSS, JavaScript, Svelte. Datawrapper, Flourish, GIS. Web scraping.',
              },
              {
                label: 'Audio and Visual:',
                text: ' ProTools, Adobe Audition, Photoshop, Adobe Premiere, Lightroom.',
              },
              {
                label: 'Language:',
                text: ' Fluent in Spanish. Intermediate ability in Korean and American Sign Language.',
              },
            ],
          },
        ],
      },
      {
        id: 'awards',
        title: 'AWARDS',
        content: [
          {
            items: [
              {
                label: 'Lorana Sullivan Scholarship',
                meta: 'Craig Newmark School of Journalism · 2025-2026',
              },
              {
                label: 'Best Light Feature, Second Place',
                meta: 'Virginia AP Broadcasters · March 2026',
              },
              {
                label: 'Best Multi-Platform Story, Second Place',
                meta: 'Virginia AP Broadcasters · March 2026',
              },
              {
                label: 'Best Spot News, Second Place',
                meta: 'Virginia AP Broadcasters · March 2026',
              },
              {
                label: 'Excellence in Multimedia, First Place',
                meta: 'Public Media Journalists Association · June 2025',
              },
              {
                label: 'Best MMJ/One-Person Band Reporter, Second Place',
                meta: 'Virginia AP Broadcasters · April 2025',
              },
              {
                label: 'Best Spot News, First Place',
                meta: 'Virginia AP Broadcasters · April 2025',
              },
              {
                label: 'Best Coverage of Breaking News, Second Place',
                meta: 'West Virginia Press Association · August 2024',
              },
            ],
          },
        ],
      },
    ],
  },

  clipsScaffold: {
    heading: "I've reported on...",
    clipGroups: [
      {
        label: '(DATA STORIES)',
        items: [
          {
            headline: 'Tree troubles.',
            href: 'https://jack-walk.github.io/marine-park-trees/',
            featured: true,
            image: '/photos/powerline.jpeg',
            imageAlt: 'Power lines cut through a tree.',
          },
          {
            headline: 'Wedding officiants.',
            href: 'https://howweloveinnyc.nycitynewsservice.com/how-25-and-24-hours-can-make-a-wedding-official/',
            featured: true,
            image: '/photos/certificates.jpg',
            imageAlt: 'Marriage officiant certificates on a table.',
          },
          {
            headline: 'Christmas complaints.',
            href: 'https://jack-walk.github.io/dc-xmas-trees/',
            featured: true,
            image: '/photos/xmas-tree.jpeg',
            imageAlt: 'A Christmas tree wrapped in plastic on a curb.',
          },
        ],
      },
      {
        label: '(LGBTQ+ NEWS)',
        items: [
          {
            headline: 'Anti-trans campaigns.',
            href: 'https://www.publicsource.org/lgbtq-pittsburgh-allegheny-county-pushback-heritage-foundation-america-first/',
            featured: true,
            image: '/photos/trans.webp',
            imageAlt: 'A trans Pride flag with a scribble drawn over it.',
          },
          {
            headline: 'Stonewall Inn.',
            href: 'https://www.advocate.com/politics/stonewall-pride-flag-activism-trump',
            featured: true,
            image: '/photos/stonewall.avif',
            imageAlt:
              'A protester raises a fist and a sign outside Stonewall Inn.',
          },
          {
            headline: 'HIV fundraising.',
            href: 'https://www.advocate.com/politics/advocacy/aids-walk-new-york-2026',
            featured: true,
            image: '/photos/aidswalk.avif',
            imageAlt:
              'A volunteer guideas participants in AIDS Walk New York 2026.',
          },
        ],
      },
      {
        label: '(HEALTH NEWS)',
        items: [
          {
            headline: 'Benefit cliffs.',
            href: 'https://streetsensemedia.org/article/how-the-benefits-cliff-traps-people-in-poverty/',
            featured: true,
            image: '/photos/cliff.png',
            imageAlt: 'An illustration of a person falling off a cliff.',
          },
          {
            headline: 'HIV shots.',
            href: 'https://www.advocate.com/health/hiv/hiv-injections-outperform-daily-pills',
            featured: true,
            image: '/photos/shot.avif',
            imageAlt: 'A syringe.',
          },
          {
            headline: 'Food banks.',
            href: 'https://wvpublic.org/story/economy/new-snap-restrictions-may-spell-big-changes-to-food-access-in-small-town-w-va/',
            featured: true,
            image: '/photos/foodbank.jpg',
            imageAlt: 'Volunteers sort shelves at a food bank.',
          },
        ],
      },
      {
        label: '(MISCELLANY)',
        items: [
          {
            headline: 'Family removal.',
            href: 'https://www.nycitynewsservice.com/2026/03/13/family-removal-is-often-traumatic-advocates-and-electeds-disagree-on-the-solution/',
            featured: true,
            image: '/photos/familyremoval.png',
            imageAlt: 'A city council press conference.',
          },
          {
            headline: 'Land use.',
            href: 'https://wvpublic.org/story/energy-environment/bottling-plant-proposal-evokes-familiar-corporate-land-use-concerns/',
            featured: true,
            image: '/photos/middleway.jpg',
            imageAlt:
              'A woman stands in a village street holding a black-and-white photo of what the street used to look like.',
          },
          {
            headline: 'Palantir protests.',
            href: 'https://www.advocate.com/politics/advocacy/act-up-palantir-nyc-protest',
            featured: true,
            image: '/photos/palantir.avif',
            imageAlt:
              "Protesters lay in a street for a 'die-in' demonstration.",
          },
        ],
      },
    ],
  },

  footerNote: '© 2026 Jack Walker',
};

export default homepageSections;
