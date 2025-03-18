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
    padding: 24px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 320px;
    text-align: center;
  `,
  Title: styled.h2`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 30px;
    color: var(--color-white);
  `,
  StyledForm: styled(Form)`
    display: flex;
    flex-direction: column;
    gap: 20px;
  `,

  StyledField: styled(Field)`
    width: 100%;
    height: 30px;
    border: none;
    border-bottom: 1px solid white;
    background-color: transparent;
    font-size: 15px;
    outline-style: initial;
    padding: 0;
    color: white;
  `,
  ErrorText: styled.div`
    color: red;
    font-size: 12px;
    text-align: start;
  `,
  Button: styled.button`
    background-color: var(--color-accent);
    color: var(--color-black);
    padding: 10px;
    border: none;
    border-radius: 5px;
    margin-top: 20px;
    cursor: pointer;
    transition: background 0.2s;
    font-size: 18px;

    &:hover {
      box-shadow: 0px 0px 10px var(--color-accent);
    }
  `,
};
