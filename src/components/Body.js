import styled from 'styled-components';

export const BodyCopy = styled.div`
  text-align: center;
  font-size: 1.5rem;
  line-height: 1.5;
  font-family: var(--serif);
  color: white;
  hr {
    border: none;
    border-top: 1px solid #151d2c;
  }
  a {
    /* font-style: italic; */
    text-decoration: none;
    color: white;
    background: rgba(255, 255, 255, 0.1);
    &:hover {
      opacity: 0.7;
    }
  }
`;
