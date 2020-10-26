import styled from 'styled-components';

export const Wrapper = styled.div`
    text-align: left;
    max-width: 920px;
    margin: 0 auto;
`;

export const Table = styled.table`
    width: 100%;
    display: grid;
    border: 1px solid var(--grey);
`;

export const Content = styled.div`
    overflow: overlay;
    max-height: 500px;
`;

export const Thead = styled.thead`
    text-align: left;
    background-color: var(--white);
`;

export const Tr = styled.tr`
    border-bottom: 1px solid var(--light-grey);
`;

export const Th = styled.th`
    padding: 1.25rem;
    color: var(--black-text);
`;

export const Td = styled.td`
    padding: 1.25rem;
    background-color: var(--white);
    color: var(--black-text);
`;

export const TrContent = styled.tr`
   background-color:  ${props => (props.white ? "var(--light-grey)" : "var(--white)")};
   color: var(--black-text);
   padding: 1.25rem;
   cursor: pointer;

   :hover {
       opacity: 0.6;
   }
`;

export const TdContent = styled.td`
   color: var(--black-text);
   padding: 1.25rem;
   width: 100%;
`;

export const Filters = styled.div`
   padding-top: 0.5rem;
`;
