import { mediaWidth } from '@/shared/assets/styles/mixins';
import Link from 'next/link';
import styled from 'styled-components';

const Container = styled.div`
  width: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--color-white);
  font-weight: var(--font-weight-semi-bold);
`;

const MainText = styled.div`
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  font-size: 10rem;
  line-height: 12rem;
  ${mediaWidth('max', 'sm')} {
    font-size: 8rem;
    line-height: 9rem;
  }
`;
const Title = styled.div`
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  font-size: var(--font-size-title);

  ${mediaWidth('max', 'sm')} {
    font-size: var(--font-size-page-title);
  }
`;
const LinkButton = styled(Link)`
  border: 1px solid var(--color-white);
  padding: var(--spacing) var(--spacing-x2);
  border-radius: var(--border-radius-md);
  margin-top: var(--spacing-x4);
  font-size: var(--font-size-sm);
  white-space: nowrap;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

  ${mediaWidth('max', 'sm')} {
    font-size: var(--font-size-thin);
  }
`;

export const SC = {
  Container,
  MainText,
  Title,
  LinkButton,
};
