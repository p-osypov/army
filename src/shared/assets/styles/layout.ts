import styled from 'styled-components';
import { mediaWidth } from '@/shared/assets/styles/mixins';

export const Container = styled.div`
  max-width: calc(var(--max-width) + var(--spacing-x4));
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--spacing-x2);
  padding-right: var(--spacing-x2);
  ${mediaWidth('max', 'md')} {
    max-width: calc(var(--max-width) + var(--spacing-x2));
    padding-left: var(--spacing);
    padding-right: var(--spacing);
  }
`;
