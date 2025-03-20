import styled from 'styled-components';
import { Form, Field } from 'formik';

export const SC = {
  Container: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: var(--color-black);
  `,
  LoginBox: styled.div`
    background-color: transparent;
    padding: var(--spacing-x3);
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 320px;
    text-align: center;
  `,
  Title: styled.h2`
    font-size: var(--font-size-medium);
    font-weight: bold;
    margin-bottom: var(--spacing-x3);
    color: var(--color-white);
  `,
  StyledForm: styled(Form)`
    display: flex;
    flex-direction: column;
    gap: var(--spacing-x2);
  `,

  StyledField: styled(Field)`
    width: 100%;
    height: 30px;
    border: none;
    border-bottom: 1px solid white;
    background-color: transparent;
    font-size: var(--font-size-normal);
    outline-style: initial;
    padding: 0;
    color: white;
  `,
  ErrorText: styled.div`
    color: var(--color-error);
    font-size: var(--font-size-thin);
    text-align: start;
  `,
  Button: styled.button`
    background-color: var(--color-accent);
    color: var(--color-black);
    padding: var(--spacing);
    border: none;
    border-radius: 5px;
    margin-top: var(--spacing-x2);
    cursor: pointer;
    transition: background 0.2s;
    font-size: var(--font-size-medium);

    &:hover {
      box-shadow: 0 0 10px var(--color-accent);
    }
  `,
};
