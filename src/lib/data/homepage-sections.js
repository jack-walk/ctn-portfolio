const homepageSections = {
  profilePanels: {
    clickLabel: 'CLICK!',
    panels: [
      {
        id: 'resume',
        title: 'RESUME',
        content: `
          <section>
            <h3>Data Experience</h3>
            <ul>
              <li>
                <strong>Reuters:</strong> Data Journalism Intern<br />
                <span>June 2026 to September 2026 | New York, NY</span>
              </li>
              <li>
                <strong>Associated Press:</strong> Elections Automated Web Scraper<br />
                <span>Oct. 2025 to Present | Remote</span>
              </li>
              <li>
                <strong>Brown University Library:</strong> GIS and Data Associate<br />
                <span>Sept. 2025 to May 2023 | Providence, RI</span>
              </li>
            </ul>

            <h3>Local News Experience</h3>
            <ul>
              <li>
                <strong>The Advocate:</strong> Reporting Fellow<br />
                <span>Jan. 2026 to June 2026 | New York, NY</span>
              </li>
              <li>
                <strong>WNYC.</strong> Audio Production Intern<br />
                <span>Jan. 2026 to June 2026 | New York, NY</span>
              </li>
              <li>
                <strong>West Virginia Public Broadcasting:</strong> Statehouse and Regional Reporter<br />
                <span>Jan. 2024 to Aug. 2025 | Charleston and Shepherdstown, West Virginia</span>
              </li>
              <li>
                <strong>Times West Virginian:</strong> General Assignment Reporter<br />
                <span>July to Dec. 2023 | Fairmont, West Virginia</span>
              </li>
            </ul>

            <h3>Undergraduate Experience</h3>
            <ul>
              <li>
                <strong>The Brown Daily Herald:</strong> Senior Editor<br />
                <span>Dec. 2021 to Dec. 2022 | Providence, Rhode Island</span>
              </li>
              <li>
                <strong>Washington Blade:</strong> Editorial Fellow<br />
                <span>May to Sept. 2022 | Rehoboth Beach, Delaware</span>
              </li>
            </ul>
          </section>
        `,
      },
      {
        id: 'skills',
        title: 'SKILLS',
        content: `
          <section>
            <ul>
              <li>
                <strong>Data:</strong> Python, pandas, Excel. HTML, CSS, JavaScript, Svelte. Datawrapper, Flourish, GIS. Web scraping.
              </li>
              <li>
                <strong>Audio and Visual:</strong> ProTools, Adobe Audition, Photoshop, Adobe Premiere, Lightroom.
              </li>
              <li>
                <strong>Language:</strong> Fluent in Spanish. Intermediate ability in Korean and American Sign Language.
              </li>
            </ul>
          </section>
        `,
      },
      {
        id: 'awards',
        title: 'AWARDS',
        content: `
          <section>
            <ul>
              <li><strong>Lorana Sullivan Scholarship</strong><br /><span>Craig Newmark School of Journalism · 2025-2026</span></li>
              <li><strong>Best Light Feature, Second Place</strong><br /><span>Virginia AP Broadcasters · March 2026</span></li>
              <li><strong>Best Multi-Platform Story, Second Place</strong><br /><span>Virginia AP Broadcasters · March 2026</span></li>
              <li><strong>Best Spot News, Second Place</strong><br /><span>Virginia AP Broadcasters · March 2026</span></li>
              <li><strong>Excellence in Multimedia, First Place</strong><br /><span>Public Media Journalists Association · June 2025</span></li>
              <li><strong>Best MMJ/One-Person Band Reporter, Second Place</strong><br /><span>Virginia AP Broadcasters · April 2025</span></li>
              <li><strong>Best Spot News, First Place</strong><br /><span>Virginia AP Broadcasters · April 2025</span></li>
              <li><strong>Best Coverage of Breaking News, Second Place</strong><br /><span>West Virginia Press Association · August 2024</span></li>
            </ul>
          </section>
        `,
      },
    ],
  },

  clipsScaffold: {
    heading: 'I\'ve reported on...',
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
            imageAlt: 'A protester raises a fist and a sign outside Stonewall Inn.',
          },
          {
            headline: 'HIV fundraising.',
            href: 'https://www.advocate.com/politics/advocacy/aids-walk-new-york-2026',
            featured: true,
            image: '/photos/aidswalk.avif',
            imageAlt: 'A volunteer guideas participants in AIDS Walk New York 2026.',
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
            imageAlt: 'A woman stands in a village street holding a black-and-white photo of what the street used to look like.',
          },
          {
            headline: 'Palantir protests.',
            href: 'https://www.advocate.com/politics/advocacy/act-up-palantir-nyc-protest',
            featured: true,
            image: '/photos/palantir.avif',
            imageAlt: 'Protesters lay in a street for a \'die-in\' demonstration.',
          },
        ],
      },
    ],
  },

  footerNote: '© 2026 Jack Walker',
};

export default homepageSections;
