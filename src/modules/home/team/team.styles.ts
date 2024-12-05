import { Container } from '@/shared/assets/styles/layout';
import { mediaWidth } from '@/shared/assets/styles/mixins';
import Slider from '@/shared/components/slider';
import styled from 'styled-components';

export const SC = {
  Section: styled.section`
    color: var(--color-white);
    margin-bottom: 100px;
    ${mediaWidth('max', 'lg')} {
      margin-bottom: 70px;
    }
    ${mediaWidth('max', 'md')} {
      margin-bottom: 50px;
    }
    ${mediaWidth('max', 'sm')} {
      margin-bottom: 30px;
    }
  `,

  Content: styled(Container)`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: calc(var(--spacing) * 6);
  `,

  TitleBlock: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-x2);
  `,
  Title: styled.span`
    font-size: 48px;
    background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0.2)
    );
    background-clip: text;
    color: transparent;
    font-weight: var(--font-weight-medium);
    padding-bottom: 5px;
    text-align: center;
    max-width: 580px;
  `,
  JoinUsBtn: styled.button`
    background-color: var(--color-accent);
    padding: 20px 40px;
    border-radius: 100px;
    cursor: pointer;
    font-size: var(--font-size-medium);
    color: var(--color-white);
  `,

  SliderContainer: styled.div`
    width: 100%;
  `,

  Slider: styled(Slider)`
    width: 100%;
  `,
  Card: styled.div`
    display: inline-flex !important;
    flex-direction: column;
    gap: var(--spacing-x2);
    text-align: center;
    padding: 10px;
  `,
  Image: styled.img`
    width: 100%;
    margin-bottom: 15px;
  `,
  Name: styled.span`
    font-size: 20px;
  `,
  Position: styled.span`
    opacity: 70%;
    font-size: var(--font-size-medium);
  `,
};
