import { Container } from '@/shared/assets/styles/layout';
import { mediaWidth } from '@/shared/assets/styles/mixins';
import { Field } from 'formik';
import Slider from 'react-slick';
import styled from 'styled-components';

export const SC = {
  Section: styled.section`
    color: var(--color-white);
    margin-bottom: 100px;
  `,

  Content: styled(Container)`
    display: flex;
    flex-direction: column;
    gap: calc(var(--spacing) * 6);
  `,

  Slider: styled(Slider)`
    width: calc(100% + var(--spacing-x4));
    margin-left: calc(0px - var(--spacing-x2));

    .slick-dots {
      bottom: -30px;
      li button:before {
        color: var(--color-white);
        font-size: 10px;
      }
      li.slick-active button:before {
        color: var(--color-accent);
        opacity: 1;
      }
    }
  `,

  Cooperation: styled.div`
    padding: 0 var(--spacing-x2);
    display: inline-flex !important;
    justify-content: center;
  `,

  CooperationImage: styled.img`
    width: 174px;
    height: 153px;
  `,

  ContactsForm: styled.div`
    display: flex;
    gap: calc(var(--spacing) * 10);
    border: 1px solid rgba(33, 31, 31, 1);
    padding: 0 calc(var(--spacing) * 7);
    flex-wrap: wrap;
    ${mediaWidth('max', 'md')} {
      padding: 0 var(--spacing-x4);
      gap: calc(var(--spacing) * 6);
    }
    ${mediaWidth('max', 'sm')} {
      padding: 0;
      gap: var(--spacing-x3);
    }
  `,

  FormBlock: styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--spacing-x3);
    padding: calc(var(--spacing) * 6) 0;
    max-width: 670px;
    min-width: 400px;
    flex: 1;
    ${mediaWidth('max', 'md')} {
      padding: var(--spacing-x4) 0;
      gap: var(--spacing-x2);
    }
    ${mediaWidth('max', 'sm')} {
      min-width: 100%;
      padding: var(--spacing-x4) var(--spacing-x3);
    }
  `,

  TitleBlock: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-x2);
  `,

  Subtitle: styled.p`
    opacity: 70%;
    line-height: 1.5;
    font-size: var(--font-size-medium);
    max-width: 550px;
    ${mediaWidth('max', 'xs')} {
      font-size: var(--font-size-normal);
    }
  `,

  Form: styled.div`
    display: flex;
    gap: var(--spacing-x4);
    flex-wrap: wrap;
  `,

  InputWrapper: styled.div`
    position: relative;
    flex: 1;
    border: 1px solid rgba(33, 31, 31, 1);
    min-width: 300px;
    min-height: 100%;
    ${mediaWidth('max', 'xxs')} {
      min-width: 220px;
    }
    input,
    textarea,
    select {
      background: transparent;
      padding: var(--spacing-x2);
      color: white;
      width: 100%;
      min-height: 100%;
      border: none;
      resize: none;

      &::placeholder {
        color: white;
      }
    }

    select {
      padding-left: calc(var(--spacing) * 1.5);
      cursor: pointer;
      width: calc(100% - 5px);

      option {
        background: var(--color-black);
        color: white;
      }
    }

    textarea {
      height: 100px;
      white-space: pre-wrap;
      word-wrap: break-word;
    }

    .form-error {
      color: indianred;
      font-size: var(--font-size-thin);
      position: absolute;
      top: 110%;
    }
  `,

  SendBtn: styled.button`
    background-color: var(--color-accent);
    color: var(--color-black);
    min-height: 60px;
    min-width: 240px;
    border-radius: 100px;
    cursor: pointer;
    font-size: var(--font-size-medium);
    gap: var(--spacing);
    margin-top: var(--spacing-x4);
    ${mediaWidth('max', 'sm')} {
      font-size: var(--font-size-normal);
      min-height: 50px;
      min-width: 200px;
    }
    ${mediaWidth('max', 'xxs')} {
      min-height: 50px;
      min-width: 180px;
    }
  `,

  LogosBlock: styled.div`
    min-height: 100%;
    background-color: rgba(250, 250, 250, 0.02);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: var(--spacing-x4) 0;
    flex: 1;
    gap: var(--spacing);
    max-width: 360px;

    ${mediaWidth('max', 'sm')} {
      min-width: 100%;
      flex-direction: row;
      padding: var(--spacing-x2) 0;
    }
    ${mediaWidth('max', 'xs')} {
      padding: var(--spacing) 0;
    }
    ${mediaWidth('max', 'xxs')} {
      flex-direction: column;
      padding: 0;
    }
  `,

  FirstLogoWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100%;
    gap: var(--spacing);
    padding: 0 var(--spacing-x4);
    ${mediaWidth('max', 'md')} {
      padding: 0 var(--spacing-x2);
    }
    ${mediaWidth('max', 'sm')} {
      min-height: 100%;
      min-width: 50%;
    }
    ${mediaWidth('max', 'xs')} {
      padding: var(--spacing);
    }
    ${mediaWidth('max', 'xxs')} {
      min-height: calc(60% - var(--spacing));
      min-width: 100%;
    }
  `,

  Logo: styled.img`
    max-width: 230px;
    width: 100%;
  `,

  BrigadeName: styled.div`
    text-align: center;
    opacity: 70%;

    line-height: 1.5;
    font-size: var(--font-size-medium);
    font-weight: var(--font-weight-medium);
    ${mediaWidth('max', 'sm')} {
      font-size: var(--font-size-normal);
      font-weight: var(--font-weight-regular);
    }
    ${mediaWidth('max', 'xs')} {
      font-size: var(--font-size-small);
      font-weight: var(--font-weight-thin);
    }
  `,

  UnitName: styled.div`
    text-align: center;
    font-size: calc(var(--font-size-normal) * 1.6);
    font-weight: var(--font-weight-semi-bold);
    line-height: 1.5;

    ${mediaWidth('max', 'sm')} {
      font-size: calc(var(--font-size-normal) * 1.4);
    }
    ${mediaWidth('max', 'xs')} {
      font-size: var(--font-size-medium);
    }
  `,

  SecondLogoWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 100%;
    border-top: 1px solid rgba(250, 250, 250, 0.1);
    padding-top: calc(var(--spacing) * 10);
    margin: auto;

    ${mediaWidth('max', 'sm')} {
      border-top: none;
      min-height: 100%;
      min-width: 50%;
      padding-top: 0;
    }
    ${mediaWidth('max', 'xxs')} {
      border-top: 1px solid rgba(250, 250, 250, 0.1);
      min-height: calc(40% - var(--spacing-x2));
      min-width: 100%;
      padding: var(--spacing) 0;
    }
  `,
};
