import styled from 'styled-components';
import media from "styled-media-query";

export const Input = styled.input`
   color: var(--black-text);
   padding: 0.5rem;
   border: 1px solid var(--grey);
   outline: 0;
   max-width: 160px;

   ${media.lessThan("medium")`
      padding: 0.3rem;
    `};
`;