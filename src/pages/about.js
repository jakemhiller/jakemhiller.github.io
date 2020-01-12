import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { Section } from '../components/Section';
import { SectionLink } from '../components/SectionLink';
import { BodyCopy } from '../components/Body';

const AboutPage = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            email
          }
        }
      }
    `
  );
  const { email } = site.siteMetadata;

  return (
    <Layout>
      <SEO title="About" />
      <Section>
        <SectionLink
          as={Link}
          to="/"
          color="#ffffff"
          background="#0d121b"
          hoverText="BACK"
        >
          JAKE HILLER
        </SectionLink>
      </Section>
      <BodyCopy>
        <p>
          {'Staff Software Engineer at '}
          <a href="//codecademy.com" target="false">
            Codecademy
          </a>
        </p>
        <hr />
        <div>
          <p>
            {'You can view my resume on '}
            <a href="https://www.linkedin.com/in/jaykillah" target="false">
              LinkedIn
            </a>
            {', '}
            <div>
              {'and contact me at '}
              <a href={`mailto:${email}`} target="_top">
                {email}
              </a>
              .
            </div>
          </p>
        </div>
      </BodyCopy>
    </Layout>
  );
};

export default AboutPage;
