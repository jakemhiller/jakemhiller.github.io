import React from 'react';
import styled from 'styled-components';

export const SectionText = styled.span`
  display: block;
`;

export const SectionAltText = styled.span`
  display: none;
`;

const StyledSectionLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10vw;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
  position: relative;
  user-select: none;
  text-decoration: none;
  font-weight: bold;
  overflow: hidden;
  white-space: nowrap;
  color: ${props => props.color};
  background-color: ${props => props.background};
  &:hover ${SectionAltText} {
    display: block;
    color: ${props => props.color};
    background-color: ${props => props.background};
  }
  &:hover ${SectionText} {
    display: none;
  }
`;

export const SectionLink = ({ children, hoverText, ...props }) => {
  return (
    <StyledSectionLink {...props}>
      <SectionText>{children}</SectionText>
      <SectionAltText>{hoverText}</SectionAltText>
    </StyledSectionLink>
  );
};
