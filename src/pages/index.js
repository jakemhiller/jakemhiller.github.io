import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import { Section } from '../components/Section';
import { SectionLink } from '../components/SectionLink';
import { Link } from 'gatsby';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Section>
        <SectionLink
          as={Link}
          to="/about"
          color="#ffffff"
          background="#0d121b"
          hoverText="ABOUT ME"
        >
          JAKE HILLER
        </SectionLink>
      </Section>
      <Section>
        <SectionLink
          href="https://twitter.com/jaykillah"
          color="#ffffff"
          background="#55ACEE"
          hoverText="TWITTER"
        >
          JAYKILLAH
        </SectionLink>
      </Section>
      <Section>
        <SectionLink
          href="https://github.com/jakemhiller"
          color="#333"
          background="#fff"
          hoverText="GITHUB"
        >
          JAKEMHILLER
        </SectionLink>
      </Section>
      <Section>
        <SectionLink
          href="https://www.instagram.com/jaykillah_"
          color="#ffffff"
          background="#DD3075"
          hoverText="INSTAGRAM"
        >
          JAYKILLAH_
        </SectionLink>
      </Section>
    </Layout>
  );
};

export default IndexPage;
