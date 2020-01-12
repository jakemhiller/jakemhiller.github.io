/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';

import './layout.css';
import styled from 'styled-components';

const SiteContainer = styled.main`
  min-height: 100vh;
`;

const Layout = ({ children }) => {
  return <SiteContainer>{children}</SiteContainer>;
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
