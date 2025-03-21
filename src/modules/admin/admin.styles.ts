import { HEADER_HEIGHT } from '@/shared/components/header/header.styles';
import styled from 'styled-components';
import { Container } from '@/shared/assets/styles/layout';

export const SC = {
  Container: styled(Container)`
    padding-top: calc(${HEADER_HEIGHT}px + var(--spacing-x4));
  `,
  Content: styled.section`
    padding-top: var(--spacing-x2);
    display: flex;
    gap: var(--spacing-x2);
  `,
};
