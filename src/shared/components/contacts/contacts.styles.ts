import { Container } from '@/shared/assets/styles/layout';
import { mediaWidth } from '@/shared/assets/styles/mixins';
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

  CooperationImage: styled.div<{ src: string }>`
    background-image: url('${({ src }) => src}');
    background-size: cover;
    width: 174px;
    height: 153px;
  `,

  ContactsForm: styled.div`
    display: flex;
    gap: var(--spacing-x4);
    border: 1px solid rgba(33, 31, 31, 1);
    padding: 0 calc(var(--spacing) * 6);
    min-height: 760px;
    flex-wrap: wrap;
    ${mediaWidth('max', 'md')} {
      padding: 0 var(--spacing-x4);
      gap: var(--spacing-x2);
    }
    ${mediaWidth('max', 'md')} {
      padding: 0;
      gap: var(--spacing-x2);
    }
  `,

  FormBlock: styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--spacing-x3);
    padding: calc(var(--spacing) * 6) 0;
    min-width: calc(68% - var(--spacing-x2));
    flex: 1;
    ${mediaWidth('max', 'md')} {
      padding: var(--spacing-x4) 0;
      gap: var(--spacing-x2);
    }
    ${mediaWidth('max', 'sm')} {
      min-width: 100%;
      padding: var(--spacing-x4);
    }
    ${mediaWidth('max', 'xs')} {
      padding: var(--spacing-x3);
    }
    ${mediaWidth('max', 'xxs')} {
      padding: var(--spacing-x2);
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
    max-width: 85%;
    ${mediaWidth('max', 'sm')} {
      max-width: 100%;
    }
  `,

  Input: styled.div`
    position: relative;
    flex: 1;
    border: 1px solid rgba(33, 31, 31, 1);
    min-width: 220px;
    min-height: 100%;

    input,
    textarea {
      background: transparent;
      padding: 15px;
      color: white;
      width: 100%;
      min-height: 100%;
      border: none;
      resize: none;

      &::placeholder {
        color: white;
      }
    }

    textarea {
      height: 100px;
      white-space: pre-wrap;
      word-wrap: break-word;
    }

    .form-error {
      color: red;
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
    align-items: center;
    min-width: calc(32% - var(--spacing-x2));
    padding: calc(var(--spacing) * 6) 0;
    flex: 1;
    gap: var(--spacing);

    ${mediaWidth('max', 'md')} {
      padding: var(--spacing-x4) 0;
    }
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
    min-height: 60%;
    gap: var(--spacing);
    padding: 0 var(--spacing-x4);
    ${mediaWidth('max', 'sm')} {
      padding: 0 var(--spacing-x2);
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

  FirstLogo: styled.div<{ src: string }>`
    background-image: url('${({ src }) => src}');
    background-size: cover;
    width: 230px;
    height: 200px;
    ${mediaWidth('max', 'md')} {
      width: 200px;
      height: 170px;
    }
    ${mediaWidth('max', 'sm')} {
      width: 170px;
      height: 140px;
    }
    ${mediaWidth('max', 'xxs')} {
      width: 150px;
      height: 130px;
    }
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
    align-items: flex-end;
    min-width: 100%;
    min-height: 40%;
    border-top: 1px solid rgba(250, 250, 250, 0.1);
    ${mediaWidth('max', 'md')} {
      align-items: center;
    }
    ${mediaWidth('max', 'sm')} {
      border-top: none;
      min-height: 100%;
      min-width: 50%;
    }
    ${mediaWidth('max', 'xxs')} {
      border-top: 1px solid rgba(250, 250, 250, 0.1);
      min-height: calc(40% - var(--spacing-x2));
      min-width: 100%;
      padding: var(--spacing) 0;
    }
  `,

  SecondLogo: styled.div<{ src: string }>`
    background-image: url('${({ src }) => src}');
    background-size: cover;
    width: 230px;
    height: 200px;
    ${mediaWidth('max', 'md')} {
      width: 200px;
      height: 170px;
    }
    ${mediaWidth('max', 'sm')} {
      width: 170px;
      height: 140px;
    }
    ${mediaWidth('max', 'xxs')} {
      width: 150px;
      height: 130px;
    }
  `,
};
