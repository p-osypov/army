import { mediaWidth } from '@/shared/assets/styles/mixins';
import styled from 'styled-components';
import { ErrorMessage, Field } from 'formik';

export const SC = {
  InputWrapper: styled.div`
    position: relative;
    flex: 1;
    border: 1px solid rgba(33, 31, 31, 1);
    min-width: 300px;
    ${mediaWidth('max', 'xxs')} {
      min-width: 220px;
    }
  `,
  ErrorMessage: styled(ErrorMessage)`
    color: var(--color-error);
    font-size: var(--font-size-thin);
    position: absolute;
    top: 110%;
    left: 0;
  `,
  Field: styled(Field)<{ as?: 'textarea' | 'select' }>`
    background-color: transparent;
    padding: var(--spacing-x2);
    color: white;
    width: ${({ as }) =>
      as === 'select' ? 'calc(100% - var(--spacing))' : '100%'};
    height: ${({ as }) => (as === 'textarea' ? '150px' : '50px')};
    border: none;
    resize: none;
    /* For select elements, when the field is invalid (i.e. still on placeholder), use grey */
    ${({ as }) =>
      as === 'select' &&
      `
        &:invalid {
          color: grey;
        }
      `};
    &:focus {
      background-color: var(--color-black);
    }
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
      -webkit-text-fill-color: var(--color-white);
      box-shadow: 0 0 0 1000px var(--color-black) inset; /* Force a new background color */
      transition: background-color 5000s ease-in-out 0s; /* Delay revert */
    }
  `,
};
