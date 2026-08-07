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
                <strong>REUTERS.</strong> Data Journalism Intern<br />
                <span>June 2026 to September 2026 | New York, NY</span>
              </li>
              <li>
                <strong>ASSOCIATED PRESS.</strong> Elections Automated Web Scraper (Freelance)<br />
                <span>Oct. 2025 to Present | Remote</span>
              </li>
            </ul>

            <h3>Local News Experience</h3>
            <ul>
              <li>
                <strong>THE ADVOCATE.</strong> Reporting Fellow<br />
                <span>Jan. 2026 to June 2026 | New York, NY</span>
              </li>
              <li>
                <strong>WNYC.</strong> Audio Production Intern<br />
                <span>Jan. 2026 to June 2026 | New York, NY</span>
              </li>
              <li>
                <strong>WEST VIRGINIA PUBLIC BROADCASTING.</strong> Statehouse and Regional Reporter<br />
                <span>Jan. 2024 to Aug. 2025 | Charleston and Shepherdstown, West Virginia</span>
              </li>
              <li>
                <strong>TIMES WEST VIRGINIAN.</strong> General Assignment Reporter<br />
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
              <li><strong>Best Light Feature, Second Place</strong><br /><span>West Virginia Public Broadcasting · March 2026</span></li>
              <li><strong>Best Multi-Platform Story, Second Place</strong><br /><span>West Virginia Public Broadcasting · March 2026</span></li>
              <li><strong>Best Spot News, Second Place</strong><br /><span>West Virginia Public Broadcasting · March 2026</span></li>
              <li><strong>Excellence in Multimedia, First Place</strong><br /><span>West Virginia Public Broadcasting · June 2025</span></li>
              <li><strong>Best MMJ/One-Person Band Reporter, Second Place</strong><br /><span>West Virginia Public Broadcasting · April 2025</span></li>
              <li><strong>Best Spot News, First Place</strong><br /><span>West Virginia Public Broadcasting · April 2025</span></li>
              <li><strong>Best Coverage of Breaking News, Second Place</strong><br /><span>Times West Virginian · August 2024</span></li>
            </ul>
          </section>
        `,
      },
    ],
  },

  clipsScaffold: {
    heading: '',
    clipGroups: [
      {
        label: 'Data',
        items: [
          {
            headline: 'Placeholder featured data story headline',
            href: '#',
            featured: true,
          },
          {
            headline: 'Placeholder secondary data headline',
            href: '#',
            featured: false,
          },
          {
            headline: 'Placeholder secondary data headline',
            href: '#',
            featured: false,
          },
        ],
      },
      {
        label: 'LGBTQ+',
        items: [
          {
            headline: 'Placeholder secondary LGBTQ+ headline',
            href: '#',
            featured: false,
          },
          {
            headline: 'Placeholder featured LGBTQ+ story headline',
            href: '#',
            featured: true,
          },
          {
            headline: 'Placeholder secondary LGBTQ+ headline',
            href: '#',
            featured: false,
          },
        ],
      },
      {
        label: 'Health',
        items: [
          {
            headline: 'Placeholder secondary health headline',
            href: '#',
            featured: false,
          },
          {
            headline: 'Placeholder secondary health headline',
            href: '#',
            featured: false,
          },
          {
            headline: 'Placeholder featured health story headline',
            href: '#',
            featured: true,
          },
        ],
      },
      {
        label: 'Audio',
        items: [
          {
            headline: 'Placeholder featured audio story headline',
            href: '#',
            featured: true,
          },
          {
            headline: 'Placeholder secondary audio headline',
            href: '#',
            featured: false,
          },
          {
            headline: 'Placeholder secondary audio headline',
            href: '#',
            featured: false,
          },
        ],
      },
      {
        label: 'Miscellany',
        items: [
          {
            headline: 'Placeholder secondary miscellany headline',
            href: '#',
            featured: false,
          },
          {
            headline: 'Placeholder featured miscellany story headline',
            href: '#',
            featured: true,
          },
          {
            headline: 'Placeholder secondary miscellany headline',
            href: '#',
            featured: false,
          },
        ],
      },
    ],
  },

  footerNote: 'Last updated Tktk.',
};

export default homepageSections;
