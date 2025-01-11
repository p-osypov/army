import styled from 'styled-components';
import { mediaWidth } from '@/shared/assets/styles/mixins';

export const Container = styled.div`
  max-width: calc(var(--max-width) + var(--spacing-x4));
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--spacing-x2);
  padding-right: var(--spacing-x2);
`;

export const titleStyles = `
  font-size: var(--font-size-title);
  background-image: var(--text-background-gradient);
  background-clip: text;
  color: transparent;
  font-weight: var(--font-weight-semi-bold);
  padding-bottom: var(--spacing);
  ${mediaWidth('max', 'xs')} {
    font-size: 36px;
  }
`;

export const Title = {
  Span: styled.span`
    ${titleStyles}
  `,
  H1: styled.h1`
    ${titleStyles}
  `,
};

export const Label = styled.span`
  display: block;
  border: 1px solid #fafafa26;
  border-radius: 20px;
  color: #979897;
  padding: var(--spacing) var(--spacing-x2);
  font-size: var(--font-size-thin);
  letter-spacing: 3px;
`;
