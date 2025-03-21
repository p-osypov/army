import styled from 'styled-components';

export const SC = {
  Container: styled.aside`
    flex: 200px;
    max-width: 200px;
    border: 1px solid var(--color-gray);
    border-radius: 3px;
  `,
  Route: styled.div`
    color: var(--color-white);
    padding: var(--spacing-x2);
    cursor: pointer;
    &:not(:last-child) {
      border-bottom: 1px solid var(--color-gray);
    }
    &:hover {
      background-color: var(--color-gray);
    }
  `,
};
