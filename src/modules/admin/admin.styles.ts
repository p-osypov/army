import { HEADER_HEIGHT } from '@/shared/components/header/header.styles';
import styled from 'styled-components';

export const SC = {
  Container: styled.div`
    padding-top: calc(${HEADER_HEIGHT}px + var(--spacing-x4));
  `,

  Title: styled.h1`
    color: var(--color-white);
  `,
};
