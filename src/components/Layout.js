/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';

import './layout.css';
import styled from 'styled-components';
import { useWindowSize } from 'react-use';

const SiteContainer = styled.main`
  height: var(--max-vh);
`;

const Layout = ({ children }) => {
  const { height } = useWindowSize();
  useLayoutEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, [height]);
  return <SiteContainer>{children}</SiteContainer>;
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
